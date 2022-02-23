import React from 'react';
import {View} from 'react-native';
import {Tab} from '../../atoms/tab/tab';

export const Tabs = ({tabs, selectedMenu, setSelectedMenu}) => {
  return (
    <View>
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
