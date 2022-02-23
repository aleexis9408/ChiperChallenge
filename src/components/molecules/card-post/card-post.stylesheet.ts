import {StyleSheet} from 'react-native';
import {COLORS, FONTS_SIZES} from '../../../theme/default';

export const styles = StyleSheet.create({
  cardPost: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    borderColor: COLORS.GRAY_100,
    borderWidth: 1,
  },
  cardPost__thumbnail: {
    width: '25%',
    flexGrow: 2,
    marginRight: 10,
  },
  cardPost__body: {
    width: '70%',
    justifyContent: 'space-between',
    flexGrow: 3,
  },
  cardPost__body_timeAgo: {
    textAlign: 'right',
    fontSize: FONTS_SIZES.small,
  },
  cardPost__body_title: {
    fontSize: FONTS_SIZES.paragraph,
    marginTop: 10,
    fontWeight: 'bold',
  },
  cardPost__body_content: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardPost__body_content_text: {
    fontSize: FONTS_SIZES.small,
  },
});
