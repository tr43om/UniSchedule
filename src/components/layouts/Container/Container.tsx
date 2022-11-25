import {View, StyleSheet} from 'react-native';
import React, {PropsWithChildren} from 'react';

const Container = ({children}: PropsWithChildren) => {
  return <View style={styles.container}>{children}</View>;
};

type ContainerProps = PropsWithChildren<{}>;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    padding: 15,
  },
});
export default Container;
