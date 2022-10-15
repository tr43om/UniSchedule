import {View, Text, Switch, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {Container, Typography} from '../../../components';
import {useSelector} from 'react-redux';
import {useAppDispatch, selectTheme, toggleTheme} from '../../../store';
import {useTheme} from '@react-navigation/native';

const SettingsScreen = () => {
  const dispatch = useAppDispatch();
  const {colors} = useTheme();

  const handleOnChange = () => {
    dispatch(toggleTheme());
  };
  const theme = useSelector(selectTheme);
  return (
    <Container>
      <View style={styles.setting}>
        <Typography>Dark theme</Typography>
        <Switch
          value={theme}
          onChange={handleOnChange}
          thumbColor={colors.primary}
        />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  setting: {
    borderBottomWidth: 1,
    borderBottomColor: '#e3e3e3',
    borderTopWidth: 1,
    borderTopColor: '#e3e3e3',
    paddingVertical: 15,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default SettingsScreen;
