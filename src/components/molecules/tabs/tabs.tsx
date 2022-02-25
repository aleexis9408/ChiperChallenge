import React from 'react';
import {View} from 'react-native';
import {Tab} from '../../atoms/tab/tab';
import {styles} from './tabs.stylesheet';

interface Props {
  tabs: {title: string; file: string}[];
}

export const Tabs = ({tabs}: Props) => {
  return (
    <View style={styles.container}>
      {tabs.map((item, index) => (
        <Tab key={`${index}`} title={item.title} file={item.file} />
      ))}
    </View>
  );
};
