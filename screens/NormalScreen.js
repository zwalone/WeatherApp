import { Button, Container, Content, Header } from 'native-base'
import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import Topbar from '../components/Topbar'
import TempetureView from '../components/TempetureView'
import {API_KEY} from '../api'
import DetailsWeather from '../components/DetailsWeather'
import DaysList from '../components/DaysList'
import { ScrollView } from 'react-native-gesture-handler'

export default NormalScreen = ({route , navigation}) => {
    
    const [data, setData] = useState({});
    const {latitude, longitude} = route.params;
    const [callIsRady, setCallIsReady] = useState(false)
    const [img, setImage] = useState();
                {/* <Image style={{height: 30, width: 30}} source={{ uri: 'http://openweathermap.org/img/wn/10d@2x.png'}}></Image> */}

    //http://api.openweathermap.org/data/2.5/onecall?lat=50.3040529&lon=18.7712646&appid=b9dea802d9b46dee015637bafb9076a6&units=metric
    //https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric
    useEffect(() => {
      console.log(latitude, longitude,API_KEY)
      fetch(`http://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
        .then(res => res.json())
        .then(data => {
          //console.log(data.daily)
          setData(data)
          setCallIsReady(true)
        })
        .catch(err => console.log(err))
    },[])

    return (
        <Container>
            <Topbar/>
            <Content style={styles.content}>
                {callIsRady ? <TempetureView current={data.current}/> : null}
                {callIsRady ? <DetailsWeather/> : null}
                {callIsRady ? <DaysList daysList={data.daily}></DaysList> : null}
            </Content>
        </Container>
    )
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        padding: 24,
    },

})