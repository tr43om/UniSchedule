import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {MaterialTopTabBarProps} from '@react-navigation/material-top-tabs';

const SignUpTabBar = ({state, navigation}: SignUpTabBarProps) => {
  return (
    <View style={styles.container}>
      {state.routes.map((_, i) => (
        <View
          style={{
            backgroundColor: state.index !== i ? '#c0c0c0' : '#000',
            height: 15,
            width: 15,
            borderRadius: 10,
            margin: 5,
          }}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
interface SignUpTabBarProps extends MaterialTopTabBarProps {}

export default SignUpTabBar;
