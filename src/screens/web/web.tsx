import React from 'react';
import {WebView} from 'react-native-webview';

export const Web = ({route, navigation}) => {
  console.log('route', route);
  return (
    <WebView
      source={{
        uri: route.params.uri,
      }}
    />
  );
};
