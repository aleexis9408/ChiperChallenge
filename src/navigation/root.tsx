import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Home} from '../screens/home/home';
import {Web} from '../screens/web/web';
import {SWRConfig} from 'swr';
import {fetcher} from '../common/swr.instance';

export type RootNavigationProps = {
  home: undefined;
  web: {
    uri: string;
  };
};

const Stack = createNativeStackNavigator<RootNavigationProps>();

const RootNavigation = () => {
  return (
    <SWRConfig
      value={{
        fetcher,
        provider: () => new Map(),
      }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="home">
          <Stack.Screen
            name="home"
            component={Home}
            options={{title: 'reddit/r/pics'}}
          />
          <Stack.Screen name="web" component={Web} />
        </Stack.Navigator>
      </NavigationContainer>
    </SWRConfig>
  );
};

export default RootNavigation;
