import {ScheduleScreen} from '../ScheduleScreen';
import {SettingsScreen} from '../SettingsScreen';
import {Tabs} from '../../navigation/root-routes';
import React from 'react';

const HomeScreen = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Schedule" component={ScheduleScreen} />
      <Tabs.Screen name="Settings" component={SettingsScreen} />
    </Tabs.Navigator>
  );
};

export default HomeScreen;
