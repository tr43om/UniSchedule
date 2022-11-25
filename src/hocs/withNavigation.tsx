import type {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, IconButton, Theme} from 'react-native-paper';

import {SignUpStepScreenProps} from '../types';
import {
  ArrowLeftIcon,
  ArrowNextIcon,
  ArrowRightIcon,
  CheckIcon,
} from '../assets';

import {useTheme} from 'react-native-paper';
export const withNavigation = (Component: FC<SignUpStepScreenProps>) => {
  const Wrapper: FC<SignUpStepScreenProps> = (
    props: SignUpStepScreenProps,
  ): React.ReactElement<SignUpStepScreenProps> => {
    const {colors}: Theme = useTheme();
    const {routeNames, index} = props.navigation.getState();

    const isNextButtonShown = index !== routeNames.length - 1;
    const isPrevButtonShown = index !== 0;

    const nextStep = () => {
      props.navigation.jumpTo(routeNames[index + 1]);
    };

    const previousStep = () => {
      props.navigation.jumpTo(routeNames[index - 1]);
    };

    return (
      <View style={styles.container}>
        <View style={styles.componentContainer}>
          <Component {...props} />
        </View>

        {isPrevButtonShown && (
          <IconButton
            style={styles.prevButton}
            animated
            onPress={previousStep}
            icon={({color, size}) => (
              <ArrowLeftIcon width={size} height={size} fill={color} />
            )}
          />
        )}
        {isNextButtonShown ? (
          <IconButton
            style={styles.nextButton}
            containerColor={colors.primary}
            iconColor={colors.background}
            animated
            size={25}
            onPress={nextStep}
            icon={({color, size}) => (
              <ArrowNextIcon width={size} height={size} fill={color} />
            )}
          />
        ) : (
          <IconButton
            style={styles.nextButton}
            containerColor={colors.primary}
            iconColor={colors.background}
            animated
            icon={({color, size}) => (
              <CheckIcon width={size} height={size} fill={color} />
            )}
          />
        )}
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      position: 'relative',
    },
    componentContainer: {
      marginTop: 50,
    },
    buttonsContainer: {
      flex: 1,
      position: 'absolute',
    },
    nextButton: {
      position: 'absolute',
      bottom: 0,
      right: -10,
      borderRadius: 10,
      zIndex: -1,
    },
    prevButton: {
      position: 'absolute',
      top: 0,
      left: -40,
    },
  });

  return Wrapper;
};
