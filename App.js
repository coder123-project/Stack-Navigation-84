import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Feed from './screens/Feed';
import CreateStory from './screens/CreateStory';
import DrawerNavigator from './navigation/DrawerNavigator';

const Tab = createBottomTabNavigator();

export default function App() {
  global.__reanimatedWorkletInit = () => {};

 
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}

