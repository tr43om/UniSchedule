import {View, Text, Switch, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {Container, Typography} from '../../components';
import {useSelector} from 'react-redux';
import {
  useAppDispatch,
  selectIsDarkMode,
  toggleTheme,
  setIsAuthorized,
} from '../../store';
import {useTheme} from '@react-navigation/native';
import {Button} from 'react-native-paper';

const SettingsScreen = () => {
  const dispatch = useAppDispatch();
  const {colors} = useTheme();

  const handleOnChange = () => {
    dispatch(toggleTheme());
  };
  const isDarkMode = useSelector(selectIsDarkMode);
  return (
    <Container>
      <View style={styles.setting}>
        <Typography>Dark theme</Typography>
        <Switch
          value={isDarkMode}
          onChange={handleOnChange}
          thumbColor={colors.primary}
        />
      </View>
      <View style={styles.setting}>
        <Button onPress={() => dispatch(setIsAuthorized())}>Выйти</Button>
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
