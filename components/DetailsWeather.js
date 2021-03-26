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
                    <DetailsWeatherItem name={"humidity"} styles={styles} value={`${day.humidity} %`} icon={"water-outline"}/>
                    <DetailsWeatherItem name={"sunrise"} styles={styles} value={getTime(day.sunrise)} icon={"weather-sunset-up"}/>
                    <DetailsWeatherItem name={"sunset"} styles={styles} value={getTime(day.sunset)} icon={"weather-sunset-down"}/>
                </Row>
                <Row >
                    <DetailsWeatherItem name={"pressure"} styles={styles} value={`${day.pressure}hPa`} icon={"speedometer"}/>
                    <DetailsWeatherItem name={"clouds"} styles={styles} value={`${day.clouds}%`} icon={"weather-cloudy"}/>
                    <DetailsWeatherItem name={"visibility"} styles={styles} value={`${day.visibility}m`} icon={"eye"}/>
                </Row>
                <Row >
                    <DetailsWeatherItem name={"speed"} styles={styles} value={`${day.wind_speed}m/s`} icon={"weather-windy"}/>
                    <DetailsWeatherItem name={"deg"} styles={styles} value={day.wind_deg} icon={"axis-z-rotate-clockwise"}/>
                    <DetailsWeatherItem name={"gust"} styles={styles} value={`${day.wind_gust}m/s`} icon={"chevron-triple-up"}/>
                </Row>
            </Grid>
        </View>
    )
}
