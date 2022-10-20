import React from 'react';
import {Navigation} from './src/navigation';
import {Provider as StoreProvider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import {persistor, store} from './store';
import {Provider as PaperProvider} from 'react-native-paper';

const App = () => {
  return (
    <PersistGate persistor={persistor}>
      <StoreProvider store={store}>
        <PaperProvider>
          <Navigation />
        </PaperProvider>
      </StoreProvider>
    </PersistGate>
  );
};

export default App;
