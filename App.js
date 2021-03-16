import React, { useState, useEffect } from 'react';
import { Container, Header, Root, Text, Button, Form } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import  NormalScreen  from './screens/NormalScreen';
import BlindScreen from './screens/BlindScreen';
import LoadingScreen from './screens/LoadingScreen';

export default App = () => {
  
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Loading" component={LoadingScreen}/>
        <Stack.Screen name="Normal" component={NormalScreen} />
        <Stack.Screen name="Special" component={BlindScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}