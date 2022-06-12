import React from 'react';

import { Provider } from 'react-redux';
import { store } from './src/reducers/store';
import { Provider as PaperProvider } from 'react-native-paper';
import Home from './src/views/Home';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App: () => React.ReactNode = () => {
  return (
    <>
      <PaperProvider>
        <Provider store={store}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                options={{ headerShown: false }}
                name="Home"
                component={Home}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </Provider>
      </PaperProvider>
    </>
  );
};

export default App;
