import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ManualInputScreen from './components/ManualInputScreen';
import SockSelectionScreen from './components/SockSelectionScreen';
import ResultScreen from './components/ResultScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ManualInputScreen">
        <Stack.Screen name="ManualInputScreen" component={ManualInputScreen} />
        <Stack.Screen name="SockSelectionScreen" component={SockSelectionScreen} />
        <Stack.Screen name="ResultScreen" component={ResultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
