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
      <AuthStack.Navigator>
        <AuthStack.Screen name="Signin" component={SignInScreen} />
        <AuthStack.Screen name="Signup" component={SignUpScreen} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
