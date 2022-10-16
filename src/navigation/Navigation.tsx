import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {darkTheme} from '../styles';
import {HomeScreen} from '../screens/HomeScreen';
import {SignInScreen} from '../screens/SignInScreen';
import {SignUpScreen} from '../screens/SignUpScreen';
import {AuthStack, RootStack} from './root-routes';
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
      <AuthStack.Navigator>
        <AuthStack.Screen name="Signin" component={SignInScreen} />
        <AuthStack.Screen name="Signup" component={SignUpScreen} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
