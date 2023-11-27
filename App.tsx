/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen'
import PrimaryNavigator from './src/navigation/navigation';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './src/store/store';


function App(): JSX.Element {

  useEffect(() => {
    SplashScreen.hide();
  }, [])

  return (
    <NavigationContainer>
      <Provider
        store={store}
      >
        <PersistGate loading={null} persistor={persistor}>
          <PrimaryNavigator />
        </PersistGate>
      </Provider>
    </NavigationContainer>
  )
}



export default App;
