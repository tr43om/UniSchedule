import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  AuthStackParams,
  RootStackParams,
  RootTabsParams,
  SignupTabsParams,
} from '../types';

export const RootStack = createNativeStackNavigator<RootStackParams>();
export const HomeTabs = createBottomTabNavigator<RootTabsParams>();

export const AuthStack = createNativeStackNavigator<AuthStackParams>();
export const SignupTabs = createMaterialTopTabNavigator<SignupTabsParams>();
