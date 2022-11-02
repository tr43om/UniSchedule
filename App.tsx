import React from 'react';
import {Navigation} from './src/navigation';
import {Provider as PaperProvider} from 'react-native-paper';

import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';

import {selectTheme} from './store';

const App = () => {
  const theme = useSelector(selectTheme);
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        <Navigation />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
