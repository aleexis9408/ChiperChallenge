import React from 'react';
import {View} from 'react-native';
import {Tab} from '../../atoms/tab/tab';
import {styles} from './tabs.stylesheet';

export const Tabs = ({tabs, selectedMenu, setSelectedMenu}) => {
  return (
    <View style={styles.container}>
      {tabs.map((item, index) => (
        <Tab
          key={`${index}`}
          onPress={item.onPress}
          title={item.title}
          selectedMenu={selectedMenu}
          setSelectedMenu={setSelectedMenu}
        />
      ))}
    </View>
  );
};
