import React, {useState, useEffect} from 'react';
import {View, FlatList, RefreshControl} from 'react-native';
import {CardPost} from '../../components/molecules/card-post/card-post';
import {RedditServices} from '../../services/Reddit/Reddit.services';

export const Home = ({navigation}) => {
  const [listData, setListData] = useState();
  const [refreshing, setRefreshing] = React.useState(false);

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
