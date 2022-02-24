import React from 'react';
import {View} from 'react-native';
import {Tab} from '../../atoms/tab/tab';
import {styles} from './tabs.stylesheet';

interface Props {
  tabs: {title: string; onPress: () => void}[];
  selectedMenu: string;
  setSelectedMenu: (menu: string) => void;
}

export const Tabs = ({tabs, selectedMenu, setSelectedMenu}: Props) => {
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
