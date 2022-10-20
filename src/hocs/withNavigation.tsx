import type {FC} from 'react';
import {Text, View} from 'react-native';
import React from 'react';
import {useNavigationState} from '@react-navigation/native';
import {Button} from 'react-native-paper';

import {SignUpStepScreenProps} from '../types';
export const withNavigation = (Component: FC<SignUpStepScreenProps>) => {
  const Wrapper: FC<SignUpStepScreenProps> = (
    props: SignUpStepScreenProps,
  ): React.ReactElement<SignUpStepScreenProps> => {
    const {routeNames, index} = props.navigation.getState();
    const isNextButtonDisabled = index === routeNames.length;
    const isPrevButtonDisabled = index === 0;

    const nextStep = () => {
      props.navigation.jumpTo(routeNames[index + 1]);
    };

    const previousStep = () => {
      props.navigation.jumpTo(routeNames[index - 1]);
    };

    // console.log('nav', navState);
    return (
      <View>
        <Component {...props} />
        <Button onPress={nextStep} disabled={isNextButtonDisabled}>
          next
        </Button>
        <Button onPress={previousStep} disabled={isPrevButtonDisabled}>
          prev
        </Button>
      </View>
    );
  };

  return Wrapper;
};
