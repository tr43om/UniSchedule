import {View, StyleSheet} from 'react-native';
import React, {PropsWithChildren} from 'react';

const Container = ({children}: PropsWithChildren) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
});
export default Container;
