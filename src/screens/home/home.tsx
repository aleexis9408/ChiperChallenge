import React, {useState, useEffect} from 'react';
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
const screen = Dimensions.get('screen');

export const Home = ({
  navigation,
}: NativeStackScreenProps<RootNavigationProps, 'home'>) => {
  const [listData, setListData] = useState<Ithing | undefined>();
  const [refreshing, setRefreshing] = React.useState(false);
  const [selectedMenu, setSelectedMenu] = useState('New');

  const TABS = [
    {
      title: 'New',
      onPress: () => getRedditData('new'),
    },
    {
      title: 'Top',
      onPress: () => getRedditData('top'),
    },
    {
      title: 'Popular',
      onPress: () => getRedditData('controversial'),
    },
    {
      title: 'Hot',
      onPress: () => getRedditData('hot'),
    },
  ];

  const getRedditData = async (category = 'new') => {
    try {
      setListData([]);
      const response: IReddit = await RedditServices.getRedditData(category);
      setListData(response.data.children);
    } catch (error) {}
  };

  const onRefresh = async () => {
    setRefreshing(true);
    setListData([]);
    await getRedditData();
    setRefreshing(false);
  };

  useEffect(() => {
    getRedditData();
  }, []);

  return (
    <View style={styles.home}>
      <FlatList
        data={listData}
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
            <Tabs
              tabs={TABS}
              selectedMenu={selectedMenu}
              setSelectedMenu={setSelectedMenu}
            />
          </React.Fragment>
        )}
        renderItem={({item, index}) => (
          <CardPost
            key={index}
            content={item.data}
            onPress={() => navigation.navigate('web', {uri: item.data.url})}
          />
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
