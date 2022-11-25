import {View, StyleSheet} from 'react-native';
import React from 'react';
import {CheckIcon} from '../../assets';
import {MaterialTopTabNavigationProp} from '@react-navigation/material-top-tabs';
import {SignupStepsTabsParams} from '../../types';
import {useTheme, AnimatedFAB} from 'react-native-paper';
import {StyleProp, ViewStyle} from 'react-native';
import {useAppDispatch, setIsAuthorized} from '../../store';

interface NavigationNextButtonProps {
  isDisabled?: boolean;
  isVisible?: boolean;
  buttonStyle?: StyleProp<ViewStyle>;
}

const NavigationNextButton = ({
  isDisabled = false,
  isVisible = true,
  buttonStyle,
}: NavigationNextButtonProps) => {
  const {colors} = useTheme();

  const dispatch = useAppDispatch();

  const finishAuthorization = () => {
    dispatch(setIsAuthorized());
  };
  return (
    <View style={{position: 'absolute', bottom: 70, right: 135}}>
      <AnimatedFAB
        onPress={finishAuthorization}
        label="Завершить"
        variant="secondary"
        style={{backgroundColor: isDisabled ? 'transparent' : colors.primary}}
        color="#fff"
        elevation={0}
        disabled={isDisabled}
        extended={!isDisabled}
        icon={({size, color}) => (
          <CheckIcon width={size} height={size} fill="#fff" />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  nextButton: {
    borderRadius: 10,
  },
});

export default NavigationNextButton;
