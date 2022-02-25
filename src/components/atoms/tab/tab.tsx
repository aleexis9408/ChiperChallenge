import React, {useContext} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {AppContext} from '../../../context/app.provider';
import {styles} from './tab.stylesheet';

interface Props {
  title: string;
  file: string;
}

export const Tab = ({title, file}: Props) => {
  const {select, setSelect} = useContext(AppContext);
  return (
    <TouchableOpacity
      style={[styles.tab, select === file && styles.tab_selected]}
      onPress={() => {
        setSelect(file);
      }}>
      <Text
        style={[
          styles.tab__text,
          select === file && styles.tab__text_selected,
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
