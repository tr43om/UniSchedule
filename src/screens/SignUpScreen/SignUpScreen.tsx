import {StyleSheet} from 'react-native';
import React from 'react';
import {SignupTabs} from '../../navigation/root-routes';
import {
  SignUpFirstStepScreen,
  SignUpSecondStepScreen,
  SignUpThirdStepScreen,
} from './steps';
import {SignUpTabBar} from '../../../components';
import {MaterialTopTabBarProps} from '@react-navigation/material-top-tabs';
import {withNavigation} from '../../hocs';

const SignUpScreen = () => {
  return (
    <SignupTabs.Navigator
      tabBarPosition="bottom"
      tabBar={(state: MaterialTopTabBarProps) => <SignUpTabBar {...state} />}
      sceneContainerStyle={styles.container}
      backBehavior="order"
      children={
        <SignupTabs.Group>
          <SignupTabs.Screen
            name="FirstStep"
            component={withNavigation(SignUpFirstStepScreen)}
          />
          <SignupTabs.Screen
            name="SecondStep"
            component={SignUpSecondStepScreen}
          />
          <SignupTabs.Screen
            name="ThirdStep"
            component={SignUpThirdStepScreen}
          />
        </SignupTabs.Group>
      }
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
});

export default SignUpScreen;
