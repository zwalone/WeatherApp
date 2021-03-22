import { Container, Content, Text } from 'native-base'
import React, {useState, useEffect} from 'react'
import { StyleSheet } from 'react-native'
import Topbar from '../components/Topbar'
import TempetureView from '../components/TempetureView'
import {API_KEY} from '../api'
import DetailsWeather from '../components/DetailsWeather'
import DaysList from '../components/DaysList'
import HoursTempetureList from '../components/HoursTempetureList'

export default NormalScreen = ({route , navigation}) => {
    
    const [data, setData] = useState({});
    const {latitude, longitude} = route.params;
    const [callIsRady, setCallIsReady] = useState(false)
    const [isDetails, setIsDetails] = useState();

    //TODO move this to loading screen =====!++++++++++!=====
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

    const onClickDetailsDay = (day) => {
        console.log("clouds",day.clouds)
        navigation.navigate('Details', {
            screen: 'DetailsDaysScreen',
            params: {
                day: day,
            }
        })
    }

    return (
        <Container>
            <Topbar/>
            <Content style={styles.content}>
                {callIsRady ? <TempetureView current={data.current}/> : null}
                {callIsRady ? <HoursTempetureList hourly={data.hourly}/> : null}
                {callIsRady ? <DetailsWeather day={data.current}/> : null}
                {callIsRady ? <DaysList daysList={data.daily} onClickDetailsDay={onClickDetailsDay}></DaysList> : null}
            </Content>
        </Container>
    )
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        paddingLeft: 24,
        paddingRight: 24,
    },

})