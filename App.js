import React, { useState, useEffect } from 'react';
import AppLoading from 'expo-app-loading'
import { Container, Header, Root, Text, Button } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

export default App = () => {
  
  const [isReady , setIsReady] = useState(false);

  useEffect(() => {
    Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    setIsReady(true);
  },[])

  return (
    <Root>
      <Container>
        <Header>
          <Button><Text>Open up App.js to start working on your app!</Text></Button>

        </Header>
      </Container>
    </Root>
  );
}