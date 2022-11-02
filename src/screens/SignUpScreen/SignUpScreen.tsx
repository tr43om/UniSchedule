import {StyleSheet} from 'react-native';
import React from 'react';
import {SignupStepsTabs} from '../../navigation/root-routes';
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
    <SignupStepsTabs.Navigator
      tabBarPosition="bottom"
      tabBar={(state: MaterialTopTabBarProps) => <SignUpTabBar {...state} />}
      sceneContainerStyle={styles.container}
      backBehavior="order"
      children={
        <SignupStepsTabs.Group>
          <SignupStepsTabs.Screen
            name="FirstStep"
            component={withNavigation(SignUpFirstStepScreen)}
          />
          <SignupStepsTabs.Screen
            name="SecondStep"
            component={withNavigation(SignUpSecondStepScreen)}
          />
          <SignupStepsTabs.Screen
            name="ThirdStep"
            component={withNavigation(SignUpThirdStepScreen)}
          />
        </SignupStepsTabs.Group>
      }
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
  },
});

export default SignUpScreen;
