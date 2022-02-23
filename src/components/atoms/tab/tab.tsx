import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

export const Tab = ({onPress, title, selectedMenu, setSelectedMenu}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        setSelectedMenu(title);
        onPress();
      }}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};
