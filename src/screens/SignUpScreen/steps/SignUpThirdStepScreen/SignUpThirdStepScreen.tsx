import {View} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';
import {SignUpStepScreenProps} from '../../../../types';

const SignUpThirdStepScreen = ({navigation}: SignUpStepScreenProps) => {
  const {jumpTo, goBack} = navigation;
  const {index, routeNames} = navigation.getState();

  const isNextButtonDisabled = index + 1 === routeNames.length;
  const isPrevButtonDisabled = index === 0;

  const nextStep = () => {
    jumpTo(routeNames[index + 1]);
  };

  const previousStep = () => {
    jumpTo(routeNames[index - 1]);
  };

  return (
    <View>
      <Button onPress={nextStep} disabled={isNextButtonDisabled}>
        next
      </Button>
      <Button onPress={previousStep} disabled={isPrevButtonDisabled}>
        prev
      </Button>
    </View>
  );
};

export default SignUpThirdStepScreen;
