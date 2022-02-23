import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../screens/home/home';
import {Web} from '../screens/web/web';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="home">
      <Stack.Screen
        name="home"
        component={Home}
        options={{title: 'reddit/r/pics'}}
      />
      <Stack.Screen name="web" component={Web} />
    </Stack.Navigator>
  );
};

export default RootNavigation;
