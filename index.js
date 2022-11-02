/**
 * @format
 */
import React from 'react';

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider as StoreProvider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import {store, persistor} from './store';

const AppWrapper = () => {
  return (
    <StoreProvider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </StoreProvider>
  );
};

AppRegistry.registerComponent(appName, () => AppWrapper);
