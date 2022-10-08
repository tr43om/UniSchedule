import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

type RootTabsParams = {
  Schedule: undefined;
  Settings: undefined;
};

export const Tabs = createBottomTabNavigator<RootTabsParams>();

export const RootStack = createNativeStackNavigator();
