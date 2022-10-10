import {View, Text, Switch} from 'react-native';
import React from 'react';
import {Container} from '../../../components';
import {Typography} from '../../../components';
import {useTheme} from '@react-navigation/native';

const SettingsScreen = () => {
  return (
    <Container>
      <Switch />
      <Typography>Dark theme</Typography>
    </Container>
  );
};

export default SettingsScreen;
