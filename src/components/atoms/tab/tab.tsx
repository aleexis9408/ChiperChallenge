import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './tab.stylesheet';

export const Tab = ({onPress, title, selectedMenu, setSelectedMenu}) => {
  return (
    <TouchableOpacity
      style={[styles.container, selectedMenu === title && styles.selected]}
      onPress={() => {
        setSelectedMenu(title);
        onPress();
      }}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};
