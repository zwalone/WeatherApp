import { Button, Container, Content, H1, Icon, Text, View } from 'native-base';
import React from 'react';
import { StyleSheet, Image } from 'react-native';

export default TempetureView = ({current, cityText, onClickChangeView}) => {

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
        <View style={styles.container}>
            <Text>{weekDay[new Date(current.dt * 1000).getDay()]}
            <Image 
                style={{height: 30, width: 30}}  
                source={{ uri: `http://openweathermap.org/img/wn/${current.weather[0].icon}@4x.png`}}
                >
            </Image>
            </Text>
            <Text style={styles.text}>{current.temp} &#8451;</Text>
            <Text >{cityText}</Text>

            <View>
                <Button rounded onPress={() => onClickChangeView()}><Text>Change</Text></Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 36,
    },
    container: {
        alignItems: 'center',
        margin: 40,
    },
})