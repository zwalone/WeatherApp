import { Container, Content, Spinner } from 'native-base'
import React, {useEffect, useState} from 'react'
import { StyleSheet } from 'react-native'
import * as Location from 'expo-location';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

export default LoadingScreen = ({navigation}) => {

  const [fontIsReady , setFontIsReady] = useState(false);
  const [localizationIsReady , setLocalizationIsReady] = useState(false);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    setFontIsReady(true);
  },[])

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let loc = await Location.getCurrentPositionAsync({});
      setLocation(loc);
      setLocalizationIsReady(true);
    })();
  }, []);

  if(fontIsReady && localizationIsReady){
    navigation.reset({
        index: 0,

        routes: [{
            name: 'Normal' ,params: {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
        }},],
      });
  }

    return (
        <Container style={{backgroundColor: 'black'}}>
            <Content contentContainerStyle={styles.contentView} >
                <Spinner color="red"></Spinner>
            </Content>
        </Container>
    )
}

const styles = StyleSheet.create({
    LoadingScreen: {
        backgroundColor: 'black',
    },
    contentView: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    }
})