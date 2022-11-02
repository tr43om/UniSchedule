import React from 'react';
import {
  HomeScreen,
  WelcomeScreen,
  SignInScreen,
  SignUpScreen,
} from '../screens';
import {RootStack, AuthStack} from './root-routes';
import {useSelector} from 'react-redux';
import {selectAuthorizationStatus} from '../../store';
import {Routes} from '../types';

const Navigation = () => {
  const isAuthorized = useSelector(selectAuthorizationStatus);

  return (
    <>
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
            name={'Welcome'}
            component={WelcomeScreen}
            options={{
              contentStyle: {paddingHorizontal: 30},
              headerShown: false,
            }}
          />
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
    </>
  );
};

export default Navigation;
