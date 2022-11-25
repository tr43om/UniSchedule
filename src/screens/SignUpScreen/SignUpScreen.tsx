import {StyleSheet} from 'react-native';
import React from 'react';
import {SignupStepsTabs} from '../../navigation/root-routes';
import {
  GroupSelectionScreen,
  OptionalQuestionScreen,
  WelcomeScreen,
} from './steps';
import {SignUpTabBar} from '../../components';
import {MaterialTopTabBarProps} from '@react-navigation/material-top-tabs';
import {withNavigation} from '../../hocs';

const SignUpScreen = () => {
  return (
    <SignupStepsTabs.Navigator
      tabBarPosition="bottom"
      tabBar={(state: MaterialTopTabBarProps) => <SignUpTabBar {...state} />}
      sceneContainerStyle={styles.container}
      backBehavior="order"
      screenOptions={{swipeEnabled: false}}
      children={
        <SignupStepsTabs.Group>
          <SignupStepsTabs.Screen name="FirstStep" component={WelcomeScreen} />
          <SignupStepsTabs.Screen
            name="SecondStep"
            component={GroupSelectionScreen}
          />
          <SignupStepsTabs.Screen
            name="ThirdStep"
            component={OptionalQuestionScreen}
          />
        </SignupStepsTabs.Group>
      }
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
    paddingHorizontal: 25,
  },
});

export default SignUpScreen;
