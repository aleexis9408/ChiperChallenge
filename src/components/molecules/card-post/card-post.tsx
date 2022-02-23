import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {convertEpochToTimeAgo} from '../../../utils/convertEpochToTime';
import {styles} from './card-post.stylesheet';

export const CardPost = ({content, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image style={styles.thumbnail} source={{url: content.thumbnail}} />
      <View style={styles.body}>
        <Text style={styles.timeAgo}>
          {convertEpochToTimeAgo(content.created_utc)}
        </Text>
        <Text style={styles.title}>{content.title}</Text>
        <View />
        <View style={styles.bodyIntern}>
          <Text>{content.name}</Text>
          <Text>Score:{content.score}</Text>
          <Text>Comments:{content.num_comments}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
