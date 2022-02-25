import React from 'react';
import RootNavigation from './src/navigation/root';
import {SafeAreaView, StyleSheet} from 'react-native';
import {AppProvider} from './src/context/app.provider';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <AppProvider>
        <RootNavigation />
      </AppProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
