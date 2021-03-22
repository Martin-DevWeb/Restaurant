import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import SearchScreen from './src/screens/SearchScreen';
import ResultShowScreen from './src/screens/ResultsShowScreen';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
      name='Business Screen'
      component={SearchScreen}
      />
      <Stack.Screen
      name='Results Show'
      component={ResultShowScreen}
      />
    </Stack.Navigator>
  )
}

export default () => (
  <NavigationContainer>
    <MyStack/>
  </NavigationContainer>
)