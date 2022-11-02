import React, {ReactNode} from 'react';

import {StyleSheet} from 'react-native';

// react-hook-form
import {
  UseControllerProps,
  FieldValues,
  useController,
  Path,
} from 'react-hook-form';

// components
import {TextInput} from 'react-native-paper';
import {Text, View} from 'react-native';
import {TextInputProps} from 'react-native-paper';

import {useTheme} from 'react-native-paper';
const FormInput = <TFormValues extends FieldValues>(
  props: FormInputProps<TFormValues>,
) => {
  const {
    field: {onChange, value},
    formState: {errors},
  } = useController(props);

  const theme = useTheme();
  const errorMessage = errors[props.name]?.message?.toString();

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={props.placeholder || 'Type a new value...'}
        onChangeText={onChange}
        value={value}
        autoCapitalize="none"
        autoCorrect={false}
        theme={theme}
        {...props}
      />
      {errors[props.name]?.message && <Text>{errorMessage}</Text>}
    </View>
  );
};

interface FormInputProps<TFormValues extends FieldValues>
  extends UseControllerProps<TFormValues>,
    Omit<TextInputProps, 'defaultValue' | 'theme'> {
  name: Path<TFormValues>;
  isLoading?: string;
  icon?: ReactNode;
  withoutIcon?: boolean;
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});

export default FormInput;
