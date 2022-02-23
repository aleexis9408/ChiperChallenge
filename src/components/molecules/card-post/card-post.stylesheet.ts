import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  thumbnail: {
    width: '25%',
    flexGrow: 2,
    marginRight: 10,
  },
  body: {
    width: '70%',
    justifyContent: 'space-between',
    flexGrow: 3,
  },
  timeAgo: {
    textAlign: 'right',
  },
  title: {
    marginTop: 10,
    fontWeight: 'bold',
  },
  bodyIntern: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
