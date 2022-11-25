import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {IconButton} from 'react-native-paper';
import {ArrowNextIcon} from '../../assets';
import {MaterialTopTabNavigationProp} from '@react-navigation/material-top-tabs';
import {SignupStepsTabsParams} from '../../types';
import {useTheme, AnimatedFAB} from 'react-native-paper';
import {StyleProp, ViewStyle} from 'react-native';

interface NavigationNextButtonProps {
  navigation: MaterialTopTabNavigationProp<SignupStepsTabsParams>;
  isDisabled?: boolean;
  isVisible?: boolean;
  buttonStyle?: StyleProp<ViewStyle>;
  handleOnPress: () => void;
}

const NavigationNextButton = ({
  navigation,
  isDisabled = false,
  isVisible = true,
  buttonStyle,
  handleOnPress,
}: NavigationNextButtonProps) => {
  const {colors} = useTheme();
  const {routeNames, index} = navigation.getState();

  const nextStep = () => {
    handleOnPress();
    navigation.jumpTo(routeNames[index + 1]);
  };
  return (
    <View style={{position: 'absolute', bottom: 70, right: 100}}>
      <AnimatedFAB
        onPress={nextStep}
        label="Далее"
        variant="secondary"
        style={{backgroundColor: isDisabled ? 'transparent' : colors.primary}}
        color="#fff"
        elevation={0}
        disabled={isDisabled}
        extended={!isDisabled}
        icon={({size, color}) => (
          <ArrowNextIcon width={size} height={size} fill="#fff" />
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
