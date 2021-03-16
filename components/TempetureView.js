import { Container, Content, H1, Icon, Text, View } from 'native-base';
import React from 'react';
import { StyleSheet, Image } from 'react-native';

export default TempetureView = ({current}) => {

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
        <View style={styles.container}>
            <Text>{weekDay[new Date(current.dt * 1000).getDay()]}</Text>
            <Image 
                style={{height: 30, width: 30}}  
                source={{ uri: `http://openweathermap.org/img/wn/${current.weather[0].icon}@4x.png`}}
                >
            </Image>
            <Text style={styles.text}>{current.temp} &#8451;</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 36,
    },
    container: {
        alignItems: 'center',
        height: '20%',
        marginTop: 20,
    }
})