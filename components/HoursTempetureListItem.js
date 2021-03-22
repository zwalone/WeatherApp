import { ListItem } from 'native-base'
import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

export default HoursTempetureListItem = ({hour}) => {

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
        <ListItem>
            <View>
                <Text style={style.text}>{getTime(hour.dt)}</Text>
                <Image 
                    style={{height: 50, width: 50}}  
                    source={{ uri: `http://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png` }}
                    >
                </Image>
                <Text>{hour.temp} &#8451;</Text>
            </View>
        </ListItem>
    )
}

const style = StyleSheet.create({
    text: {
        textAlign: 'center'
    },
    weatherIcon:
    {
        width: 50,
        height: 50,
    }
})


