import {ScheduleScreen} from '../ScheduleScreen';
import {SettingsScreen} from '../SettingsScreen';
import {Tabs} from '../../navigation/root-routes';
import React from 'react';
import {FavoriteIcon, ScheduleIcon, SettingsIcon} from '../../assets';
import {Text} from 'react-native-svg';
import {useTheme} from '@react-navigation/native';

const HomeScreen = () => {
  const {colors} = useTheme();
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 70,
        },
        tabBarLabelStyle: {
          marginBottom: 10,
        },
        tabBarIconStyle: {},
      }}>
      <Tabs.Screen
        name="Schedule"
        component={ScheduleScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <ScheduleIcon
              fill={focused ? colors.primary : '#fff'}
              width={25}
              height={25}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Favorite"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <FavoriteIcon
              fill={focused ? colors.primary : '#fff'}
              width={25}
              height={25}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <SettingsIcon
              fill={focused ? colors.primary : '#fff'}
              width={25}
              height={25}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default HomeScreen;
