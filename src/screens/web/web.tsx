import React from 'react';
import {WebView} from 'react-native-webview';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootNavigationProps} from '../../navigation/root';

export const Web = ({
  route,
}: NativeStackScreenProps<RootNavigationProps, 'web'>) => {
  return (
    <WebView
      source={{
        uri: route.params.uri,
      }}
    />
  );
};
