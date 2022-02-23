import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {convertEpochToTimeAgo} from '../../../utils/convertEpochToTime';

export const CardPost = ({content, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={{url: content.thumbnail}} />
      <View>
        <Text>{convertEpochToTimeAgo(content.created_utc)}</Text>
        <Text>{content.title}</Text>
        <View />
        <View>
          <Text>{content.name}</Text>
          <Text>Score:{content.score}</Text>
          <Text>Comments:{content.num_comments}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
