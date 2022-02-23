import {StyleSheet} from 'react-native';
import {COLORS} from '../../../theme/default';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: COLORS.GRAY_200,
    borderWidth: 1,
    height: 50,
  },
});
