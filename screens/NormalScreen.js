import { Container, Content, Text, Toast } from 'native-base'
import React, {useState, useEffect} from 'react'
import { StyleSheet } from 'react-native'
import Topbar from '../components/Topbar'
import TempetureView from '../components/TempetureView'
import {API_KEY, API_KEY_City} from '../api'
import DetailsWeather from '../components/DetailsWeather'
import DaysList from '../components/DaysList'
import HoursTempetureList from '../components/HoursTempetureList'

export default NormalScreen = ({route , navigation}) => {
    
    const [data, setData] = useState({});
    const {latitude, longitude} = route.params;
    const [cords, setCords] = useState({});
    const [callIsRady, setCallIsReady] = useState(false);
    const [isDetails, setIsDetails] = useState();
    const [cityName, setCityName] = useState("");
    const [cityText, setCityText] = useState("");

    //TODO move this to loading screen =====!++++++++++!=====
    useEffect(() => {
      fetch(`http://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
        .then(res => res.json())
        .then(data => {
          setData(data)
          setCallIsReady(true)
        })
        .catch(err => console.log(err))
    },[])

    useEffect(() => {
        fetch(`https://app.geocodeapi.io/api/v1/search?apikey=${API_KEY_City}&text=${cityName}`)
          .then(res => res.json())
          .then(data => {
            setCords(data.features[0].geometry.coordinates)
            setCityText(`${data.features[0].properties.country}, ${data.features[0].properties.region}, ${data.features[0].properties.county}`)
          })
          .catch(err => console.log(err))
    },[cityName])

    useEffect(() => {
        fetch(`http://api.openweathermap.org/data/2.5/onecall?lat=${cords[1]}&lon=${cords[0]}&appid=${API_KEY}&units=metric`)
          .then(res => res.json())
          .then(data => {
            if(data.daily !== undefined){
                setData(data)
            }else{
                Toast.show({
                    text: "City not working",
                    buttonText: "Ok",
                    duration: 3000
                })
            }
          })
          .catch(err => console.log(err))
      },[cords])

    const changeNameHandler = (val) => {
        setCityName(val)
    }

      const onClickDetailsDay = (day) => {
        navigation.navigate('Details', {
            screen: 'DetailsDaysScreen',
            params: {
                day: day,
            }
        })
    }

    const onClickChangeView = () => {
        navigation.navigate('Special', {
            screen: 'BlindScreen',
            params: {
                data: data,
            }
        })
    }

    return (
        <Container>
            <Topbar handler={changeNameHandler}/>
            <Content style={styles.content}>
                {callIsRady ? <TempetureView onClickChangeView={onClickChangeView} cityText={cityText} current={data.current}/> : null}
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