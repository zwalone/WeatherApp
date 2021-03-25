import { Col, Grid, Row } from 'native-base'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import DetailsWeatherItem from './DetailsWeatherItem'

//Add details with icons name

export default DetailsWeather = ({day}) => {

    const weekDay ={
        0: "Monday",
        1: "Tuesday",
        2: "Wednesday",
        3: "Thursday",
        4: "Friday",
        5: "Saturday",
        6: "Sunday",
    }

    const getTime = (dt) =>{
        var date = new Date(dt * 1000);
        // Hours part from the timestamp
        var hours = date.getHours();
        // Minutes part from the timestamp
        var minutes = "0" + date.getMinutes();

        // Will display time in 10:30:23 format
        var formattedTime = hours + ':' + minutes.substr(-2);
        return formattedTime
    } 

    return (
        <View style={style.container}> 
            <Grid>
                <Row >
                    <DetailsWeatherItem name={"humidity"} value={day.humidity} icon={"water-outline"}/>
                    <DetailsWeatherItem name={"sunrise"} value={getTime(day.sunrise)} icon={"weather-sunset-up"}/>
                    <DetailsWeatherItem name={"sunset"} value={getTime(day.sunset)} icon={"weather-sunset-down"}/>
                </Row>
                <Row >
                    <DetailsWeatherItem name={"pressure"} value={day.pressure} icon={"speedometer"}/>
                    <DetailsWeatherItem name={"clouds"} value={day.clouds} icon={"weather-cloudy"}/>
                    <DetailsWeatherItem name={"wind speed"} value={day.wind_speed} icon={"weather-windy"}/>

                </Row>
            </Grid>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    col: {
        height: '30%',
        width: '30%',
    }
})