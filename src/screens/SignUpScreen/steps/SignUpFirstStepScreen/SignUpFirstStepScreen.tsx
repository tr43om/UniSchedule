import React from 'react';
import {TextInput, Button} from 'react-native-paper';
import {Container} from '../../../../../components';
import {useTheme} from '@react-navigation/native';

import {SignUpStepScreenProps} from '../../../../types';

const SignUpFirstStepScreen = ({navigation}: SignUpStepScreenProps) => {
  const {colors} = useTheme();
  const {jumpTo} = navigation;
  const {index, routeNames} = navigation.getState();
  const isNextButtonDisabled = index === routeNames.length;
  const isPrevButtonDisabled = index === 0;

  const nextStep = () => {
    jumpTo(routeNames[index + 1]);
  };

  const previousStep = () => {
    jumpTo(routeNames[index - 1]);
  };

  return (
    <Container>
      <TextInput
        label="Имя"
        mode="outlined"
        activeOutlineColor={colors.primary}
      />

      <Button onPress={nextStep} disabled={isNextButtonDisabled}>
        next
      </Button>
      <Button onPress={previousStep} disabled={isPrevButtonDisabled}>
        prev
      </Button>
    </Container>
  );
};

export default SignUpFirstStepScreen;
