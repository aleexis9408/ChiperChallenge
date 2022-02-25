import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {Idata} from '../../../services/Reddit/Reddit.dto';
import {convertEpochToTimeAgo} from '../../../utils/convertEpochToTime';
import {styles} from './card-post.stylesheet';
import {useNavigation} from '@react-navigation/native';

interface Props {
  content: Idata;
}

export const CardPost = ({content}: Props) => {
  const navigation = useNavigation();
  const onPress = (uri: string) => () => {
    navigation.navigate('web', {uri});
  };

  return (
    <TouchableOpacity style={styles.cardPost} onPress={onPress(content.url)}>
      {content?.thumbnail && (
        <Image
          style={styles.cardPost__thumbnail}
          source={{uri: content.thumbnail}}
        />
      )}
      <View style={styles.cardPost__body}>
        <Text style={styles.cardPost__body_timeAgo}>
          {convertEpochToTimeAgo(content.created_utc)}
        </Text>
        <Text style={styles.cardPost__body_title}>{content.title}</Text>
        <View />
        <View style={styles.cardPost__body_content}>
          <Text style={styles.cardPost__body_content_text}>
            {content.author_fullname}
          </Text>
          <Text style={styles.cardPost__body_content_text}>
            Score:{content.score}
          </Text>
          <Text style={styles.cardPost__body_content_text}>
            Comments:{content.num_comments}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
