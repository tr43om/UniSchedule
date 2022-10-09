import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {PropsWithChildren} from 'react';
import {useTheme} from '@react-navigation/native';

const Typography = ({children}: TypographyProps) => {
  const {colors} = useTheme();

  const styles = StyleSheet.create({
    text: {
      color: colors.text,
    },
  });

  return (
    <View>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

type TypographyProps = PropsWithChildren<{}>;

export default Typography;
