import React from 'react';
import {WebView} from 'react-native-webview';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootNavigationProps} from '../../navigation/root';
import {ActivityIndicator} from 'react-native';

export const Web = ({
  route,
}: NativeStackScreenProps<RootNavigationProps, 'web'>) => {
  return (
    <WebView
      cacheEnabled={false}
      cacheMode={'LOAD_NO_CACHE'}
      renderLoading={() => <ActivityIndicator size="large" />}
      source={{
        uri: route.params.uri,
      }}
    />
  );
};
