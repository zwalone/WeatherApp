import { Body, Icon, Left, ListItem, Right } from 'native-base'
import React from 'react'
import { View, Text,Image } from 'react-native'

export default DaysListItem = ({day}) => {
    console.log(day.weather[0].icon)

    const weekDay ={
    0: "Monday",
    1: "Tuesday",
    2: "Wednesday",
    3: "Thursday",
    4: "Friday",
    5: "Saturday",
    6: "Sunday",}

    return (
        <ListItem >
            <Left>
                <Image 
                    style={{height: 30, width: 30}}  
                    source={{ uri: `http://openweathermap.org/img/wn/${day.weather[0].icon}@4x.png`}}
                    >
                </Image>
            </Left>
            <Body>
                <Text>{weekDay[new Date(day.dt * 1000).getDay()]}</Text>
            </Body>
        </ListItem>
    )
}
