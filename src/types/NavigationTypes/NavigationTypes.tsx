import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MaterialTopTabScreenProps} from '@react-navigation/material-top-tabs';
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';

export type RootStackParams = {
  Home: NavigatorScreenParams<RootTabsParams>;
  Auth: NavigatorScreenParams<AuthStackParams>;
};

export type RootTabsParams = {
  Schedule: undefined;
  Settings: undefined;
  Favorites: undefined;
};

export type AuthStackParams = {
  Welcome: undefined;
  Signin: undefined;
  Signup: NavigatorScreenParams<SignupStepsTabsParams>;
};

export type WelcomeScreenProps = NativeStackScreenProps<
  AuthStackParams,
  'Welcome'
>;

export type SignupStepsTabsParams = {
  FirstStep: undefined;
  SecondStep: undefined;
  ThirdStep: undefined;
};

export type SignUpStepScreenProps = CompositeScreenProps<
  MaterialTopTabScreenProps<SignupStepsTabsParams>,
  NativeStackScreenProps<AuthStackParams>
>;
