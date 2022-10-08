import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {darkTheme} from '../../styles';
import {HomeScreen} from '../screens/HomeScreen';
import {RootStack} from './root-routes';
const Navigation = () => {
  return (
    <NavigationContainer theme={darkTheme}>
      <RootStack.Navigator>
        <RootStack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
