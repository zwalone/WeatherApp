import { Container, Content, Text, Toast } from 'native-base'
import React, {useState, useEffect} from 'react'
import { StyleSheet } from 'react-native'
import Topbar from '../components/Topbar'
import TempetureView from '../components/TempetureView'
import {API_KEY, API_KEY_City} from '../api'
import DetailsWeather from '../components/DetailsWeatherShort'
import DaysList from '../components/DaysList'
import HoursTempetureList from '../components/HoursTempetureList'
import { blind } from '../Styles/Styles'
import {LinearGradient} from 'expo-linear-gradient'

export default BlindScreen = ({route, navigation}) => {

    const [data, setData] = useState(route.params.params.data);
    const [cords, setCords] = useState({});
    const [isDetails, setIsDetails] = useState();
    const [cityName, setCityName] = useState("");
    const [cityText, setCityText] = useState("");

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
                styles: blind,
                cityName: cityName,
                colors: ['#acb6e5', '#86fde8' ],
            }
        })
    }

    const onClickChangeView = () => {
        navigation.navigate('Normal', {
            screen: 'NormalScreen',
            params: {
                data: data,
            }
        })
    }

    return (
        <Container>
            <Topbar styles={blind} handler={changeNameHandler}/>
            <LinearGradient
                    colors={['#acb6e5', '#86fde8' ]}
                    style={back.background}
                    >
            <Content style={blind.ScreenContent}>
                <TempetureView styles={blind} onClickChangeView={onClickChangeView} cityText={cityText} current={data.current}/> 
                <HoursTempetureList styles={blind} hourly={data.hourly}/> 
                <DetailsWeather styles={blind} day={data.current}/> 
                <DaysList styles={blind} daysList={data.daily} onClickDetailsDay={onClickDetailsDay}></DaysList> 
            </Content>
            </LinearGradient>
        </Container>
    )
}

const back = StyleSheet.create({
    background: {
        flex: 1,
      },
})
