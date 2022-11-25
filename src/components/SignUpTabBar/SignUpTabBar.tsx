import {View, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import {MaterialTopTabBarProps} from '@react-navigation/material-top-tabs';
import {Container} from '../layouts';
import {useTheme} from 'react-native-paper';
import {Theme} from 'react-native-paper/lib/typescript/types';

const SignUpTabBar = ({state}: SignUpTabBarProps) => {
  const {colors} = useTheme();

  const styles = StyleSheet.create({
    container: {width: 100},
    listContainer: {
      alignSelf: 'flex-start',
      margin: 15,
    },

    step: {
      height: 7,
      width: 7,
      borderRadius: 10,
      margin: 5,
      backgroundColor: '#bbbbbb',
    },

    activeStep: {
      backgroundColor: colors.primary,
    },
  });
  return (
    <View style={styles.container}>
      <FlatList
        data={state.routes}
        horizontal
        contentContainerStyle={styles.listContainer}
        renderItem={({index}) => (
          <View
            style={[styles.step, index === state.index && styles.activeStep]}
          />
        )}
      />
    </View>
  );
};

interface SignUpTabBarProps extends MaterialTopTabBarProps {}

export default SignUpTabBar;
