import { ListItem } from 'native-base'
import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

export default HoursTempetureListItem = ({hour, styles}) => {

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
                <Text style={styles.HoursItemText}>{getTime(hour.dt)}</Text>
                <Image 
                    style={styles.HoursItemIcon}  
                    source={{ uri: `http://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png` }}
                    >
                </Image>
                <Text style={styles.HoursItemText}>{hour.temp.toFixed()} &#8451;</Text>
            </View>
        </ListItem>
    )
}




