import React, {useState, useEffect} from 'react';
import {View, FlatList, RefreshControl} from 'react-native';
import {CardPost} from '../../components/molecules/card-post/card-post';
import {Tabs} from '../../components/molecules/tabs/tabs';
import {RedditServices} from '../../services/Reddit/Reddit.services';

export const Home = ({navigation}) => {
  const [listData, setListData] = useState();
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
    const response = await RedditServices.getRedditData(category);
    console.log(response);
    setListData(response.data.children);
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
        keyExtractor={(item, index) => index + ''}
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
