import { Container, Content } from 'native-base'
import React from 'react'
import { View, Text , StyleSheet, Image} from 'react-native'
import DetailsWeatherShort from '../components/DetailsWeatherShort'
import TempetureView from '../components/TempetureView'
import DetailsListTemp from '../components/DetailsListTemp'
import {LinearGradient} from 'expo-linear-gradient'

export default DetailsDaysScreen = ({route , navigation}) => {

    const {day, styles, colors, cityName} = route.params.params
    const weekDay ={
        0: "Monday",
        1: "Tuesday",
        2: "Wednesday",
        3: "Thursday",
        4: "Friday",
        5: "Saturday",
        6: "Sunday",
    }

    return (
        <Container>
            <LinearGradient
                colors={[colors[0], colors[1]]}
                style={back.background}
                >
            <Content style={styles.DSContent}>
                <View style={styles.DSContainer}>
                    <Text style={styles.DSText}>{weekDay[new Date(day.dt * 1000).getDay()]}</Text>
                    <Text style={styles.TempViewTextSmall}>{cityName}</Text>
                </View>
                <DetailsWeatherShort styles={styles} day={day}/>
                <DetailsListTemp styles={styles} temp={day.temp} fells_like={day.feels_like}></DetailsListTemp>
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