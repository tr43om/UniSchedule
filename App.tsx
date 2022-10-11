import React from 'react';
import {Navigation} from './src/navigation';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import {persistor, store} from './store';

const App = () => {
  return (
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </PersistGate>
  );
};

export default App;
