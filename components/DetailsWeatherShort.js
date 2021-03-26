import { Col, Grid, Row } from 'native-base'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import DetailsWeatherItem from './DetailsWeatherItem'

//Add details with icons name

export default DetailsWeather = ({day, styles}) => {

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
        <View style={styles.DetailsWeatherContainer}> 
            <Grid>
                <Row >
                    <DetailsWeatherItem styles={styles} name={"humidity"} value={`${day.humidity}%`} icon={"water-outline"}/>
                    <DetailsWeatherItem styles={styles} name={"sunrise"} value={getTime(day.sunrise)} icon={"weather-sunset-up"}/>
                    <DetailsWeatherItem styles={styles} name={"sunset"} value={getTime(day.sunset)} icon={"weather-sunset-down"}/>
                </Row>
                <Row >
                    <DetailsWeatherItem styles={styles} name={"pressure"} value={`${day.pressure}hPa`} icon={"speedometer"}/>
                    <DetailsWeatherItem styles={styles} name={"clouds"} value={`${day.clouds}%`} icon={"weather-cloudy"}/>
                    <DetailsWeatherItem styles={styles} name={"speed"} value={`${day.wind_speed}m/s`} icon={"weather-windy"}/>

                </Row>
            </Grid>
        </View>
    )
}
