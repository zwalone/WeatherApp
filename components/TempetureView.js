import { Button, Container, Content, H1, Icon, Text, View } from 'native-base';
import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default TempetureView = ({current, cityText, onClickChangeView, styles}) => {

    const weekDay ={
        0: "Sunday",
        1: "Monday",
        2: "Tuesday",
        3: "Wednesday",
        4: "Thursday",
        5: "Friday",
        6: "Saturday",
    }

    return (
        <View style={styles.TempViewContent}>
            <Button style={styles.TempViewButton} transparent onPress={() => onClickChangeView()}><Entypo style={styles.TemoViewIconButton} name="swap" size={24} color="black" /></Button>

            <Text style={styles.TempViewTextSmall}>{weekDay[new Date(current.dt * 1000).getDay()]}
            <Image 
                style={{height: 30, width: 30}}  
                source={{ uri: `http://openweathermap.org/img/wn/${current.weather[0].icon}@4x.png`}}
                >
            </Image>

            </Text>

            <Text style={styles.TempViewText}>{current.temp.toFixed()} &#8451;</Text>
            <Text style={styles.TempViewTextSmall}>{cityText}</Text>

        </View>
    )
}
