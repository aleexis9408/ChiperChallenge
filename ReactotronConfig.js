import Reactotron from 'reactotron-react-native';

let reactotron;

if (__DEV__) {
  Reactotron.configure({
    name: 'Chiper',
  }); // controls connection & communication settings

  Reactotron.useReactNative({
    asyncStorage: false, // there are more options to the async storage.
    errors: true, // or turn it off with false
  }); // add all built-in react native plugins
  Reactotron.trackGlobalErrors({
    veto: frame => frame.fileName.indexOf('/node_modules/react-native/') >= 0,
  });
  Reactotron.connect(); // let's connect!
  Reactotron.clear();

  reactotron = Reactotron;
  console.tron = Reactotron;
  console.log = Reactotron.log;
}

export default reactotron;
