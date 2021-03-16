import { Col, Grid } from 'native-base'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import DetailsWeatherItem from './DetailsWeatherItem'

//Add details with icons name

export default DetailsWeather = () => {
    return (
        <View style={style.container}> 
            <Grid>
                <Col style={style.col}>
                    <DetailsWeatherItem/>
                    <DetailsWeatherItem/>
                    <DetailsWeatherItem/>
                </Col>
                <Col style={style.col}>
                    <DetailsWeatherItem/>
                    <DetailsWeatherItem/>
                    <DetailsWeatherItem/>
                </Col>
                <Col style={style.col}>
                    <DetailsWeatherItem/>
                    <DetailsWeatherItem/>
                    <DetailsWeatherItem/>
                </Col>
            </Grid>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    col: {
        width: '30%'
    }
})