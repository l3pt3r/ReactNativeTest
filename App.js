import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Geolocation from '@react-native-community/geolocation';
import MainScreen from './app/screens/MainScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  
  return (
    // <MainScreen />

    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome'>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Main" component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;