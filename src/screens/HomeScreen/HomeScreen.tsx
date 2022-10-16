import {ScheduleScreen} from '../ScheduleScreen';
import {SettingsScreen} from '../SettingsScreen';
import {FavoritesScreen} from '../FavoritesScreen';
import {Tabs} from '../../navigation/root-routes';
import React from 'react';
import {FavoriteIcon, ScheduleIcon, SettingsIcon} from '../../assets';
import {useTheme} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {selectTheme} from '../../../store';
import {Routes} from '../../types';

const HomeScreen = () => {
  const isDarkTheme = useSelector(selectTheme);
  const {colors} = useTheme();

  const iconsColor = isDarkTheme ? '#fff' : colors.text;
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 70,
        },
        tabBarLabelStyle: {
          marginBottom: 10,
        },
      }}>
      <Tabs.Screen
        name={Routes.Schedule}
        component={ScheduleScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <ScheduleIcon
              fill={focused ? colors.primary : iconsColor}
              width={25}
              height={25}
            />
          ),
        }}
      />
      <Tabs.Screen
        name={Routes.Favorites}
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <FavoriteIcon
              fill={focused ? colors.primary : iconsColor}
              width={25}
              height={25}
            />
          ),
        }}
      />
      <Tabs.Screen
        name={Routes.Settings}
        component={SettingsScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <SettingsIcon
              fill={focused ? colors.primary : iconsColor}
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
