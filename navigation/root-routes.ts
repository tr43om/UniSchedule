import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

type RootTabsParams = {
  Schedule: undefined;
  Settings: undefined;
};

export const Tabs = createBottomTabNavigator<RootTabsParams>();

export const RootStack = createNativeStackNavigator();
