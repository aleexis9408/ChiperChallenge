import {StyleSheet} from 'react-native';
import {COLORS, FONTS_SIZES} from '../../../theme/default';

export const styles = StyleSheet.create({
  tab: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    width: '25%',
    backgroundColor: COLORS.GRAY_100,
  },
  tab_selected: {
    backgroundColor: COLORS.INFO,
    fontWeight: 'bold',
  },
  tab__text: {
    fontSize: FONTS_SIZES.label,
  },
  tab__text_selected: {
    fontWeight: 'bold',
  },
});
