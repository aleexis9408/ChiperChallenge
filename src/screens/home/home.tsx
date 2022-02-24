import React, {useState, useEffect} from 'react';
import {View, FlatList, RefreshControl} from 'react-native';
import {CardPost} from '../../components/molecules/card-post/card-post';
import {Tabs} from '../../components/molecules/tabs/tabs';
import {RedditServices} from '../../services/Reddit/Reddit.services';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootNavigationProps} from '../../navigation/root';
import {IReddit, Ithing} from '../../services/Reddit/Reddit.dto';

export const Home = ({
  navigation,
}: NativeStackScreenProps<RootNavigationProps, 'home'>) => {
  const [listData, setListData] = useState<Ithing>();
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
      const response: IReddit = await RedditServices.getRedditData(category);
      setListData(response.data.children);
    } catch (error) {}
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await getRedditData();
    setRefreshing(false);
  };

  useEffect(() => {
    getRedditData();
  }, []);

  return (
    <View>
      <FlatList
        data={listData}
        keyExtractor={(item, index) => `${index}`}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
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
