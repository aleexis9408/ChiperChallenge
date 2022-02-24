import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './tab.stylesheet';

interface Props {
  selectedMenu: string;
  onPress: () => void;
  setSelectedMenu: (menu: string) => void;
  title: string;
}

export const Tab = ({onPress, title, selectedMenu, setSelectedMenu}: Props) => {
  return (
    <TouchableOpacity
      style={[styles.tab, selectedMenu === title && styles.tab_selected]}
      onPress={() => {
        setSelectedMenu(title);
        onPress();
      }}>
      <Text
        style={[
          styles.tab__text,
          selectedMenu === title && styles.tab__text_selected,
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
