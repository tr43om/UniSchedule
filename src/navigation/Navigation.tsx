import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {darkTheme} from '../styles';
import {lightTheme} from '../styles';
import {HomeScreen} from '../screens/HomeScreen';
import {RootStack} from './root-routes';
import {useSelector} from 'react-redux';
import {selectTheme} from '../../store';
import {SignInScreen} from '../screens/SignInScreen';
import {SignUpScreen} from '../screens/SignUpScreen';
import {AuthStack} from './root-routes';
import {Routes} from '../types';

import {selectAuthorizationStatus} from '../../store';
const Navigation = () => {
  const isDarkTheme = useSelector(selectTheme);
  const isAuthorized = useSelector(selectAuthorizationStatus);
  return (
    <NavigationContainer theme={isDarkTheme ? darkTheme : lightTheme}>
      {isAuthorized ? (
        <RootStack.Navigator>
          <RootStack.Screen
            name={Routes.Home}
            component={HomeScreen}
            options={{headerShown: false}}
          />
        </RootStack.Navigator>
      ) : (
        <AuthStack.Navigator>
          <AuthStack.Screen
            name={Routes.Signup}
            component={SignUpScreen}
            options={{headerShown: false}}
          />
          <AuthStack.Screen
            name={Routes.Signin}
            component={SignInScreen}
            options={{headerShown: false}}
          />
        </AuthStack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Navigation;
