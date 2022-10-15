import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {darkTheme} from '../styles';
import {lightTheme} from '../styles';
import {HomeScreen} from '../screens/HomeScreen';
import {RootStack} from './root-routes';
import {useSelector} from 'react-redux';
import {selectTheme} from '../../store';
const Navigation = () => {
  const isDarkTheme = useSelector(selectTheme);
  return (
    <NavigationContainer theme={isDarkTheme ? darkTheme : lightTheme}>
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
