import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

type RootStackParams = {
  Home: undefined;
  Auth: undefined;
};

type AuthStackParams = {
  Signin: undefined;
  Signup: undefined;
};

type RootTabsParams = {
  Schedule: undefined;
  Settings: undefined;
  Favorites: undefined;
};

export const Tabs = createBottomTabNavigator<RootTabsParams>();

export const RootStack = createNativeStackNavigator<RootStackParams>();
export const AuthStack = createNativeStackNavigator<AuthStackParams>();
