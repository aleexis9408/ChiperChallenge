import React, {useState, useEffect, useContext} from 'react';
import {
  View,
  FlatList,
  RefreshControl,
  ActivityIndicator,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {CardPost} from '../../components/molecules/card-post/card-post';
import {Tabs} from '../../components/molecules/tabs/tabs';
import {RedditServices} from '../../services/Reddit/Reddit.services';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootNavigationProps} from '../../navigation/root';
import {IReddit, Ithing} from '../../services/Reddit/Reddit.dto';
import {AppContext} from '../../context/app.provider';
const screen = Dimensions.get('screen');

export const Home = ({}: NativeStackScreenProps<
  RootNavigationProps,
  'home'
>) => {
  const [listData, setListData] = useState<Ithing | undefined>();
  const [refreshing, setRefreshing] = React.useState(false);
  const {select} = useContext(AppContext);
  const TABS = [
    {
      file: 'new',
      title: 'New',
    },
    {
      file: 'top',
      title: 'Top',
    },
    {
      file: 'controversial',
      title: 'Popular',
    },
    {
      file: 'hot',
      title: 'Hot',
    },
  ];

  const {response, isLoading, isError} = RedditServices.useRedditData(select);
  useEffect(() => {
    if (response?.data?.children?.length > 0) {
      setListData(response.data.children);
    }
  }, [response]);

  const onRefresh = async () => {
    setRefreshing(true);
    setListData([]);
    setRefreshing(false);
  };

  return (
    <View style={styles.home}>
      <FlatList
        data={isLoading ? [] : listData}
        keyExtractor={(item, index) => `${index}`}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        ListEmptyComponent={() => (
          <View style={styles.home__spinner}>
            <ActivityIndicator size="large" />
          </View>
        )}
        refreshing={true}
        ListHeaderComponent={() => (
          <React.Fragment>
            <Tabs tabs={TABS} />
          </React.Fragment>
        )}
        renderItem={({item, index}) => (
          <CardPost key={index} content={item.data} />
        )}
      />
    </View>
  );
};

export const styles = StyleSheet.create({
  home: {
    flex: 1,
  },
  home__spinner: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    height: screen.height - 200,
  },
});
