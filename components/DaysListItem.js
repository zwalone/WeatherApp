import { Body, Button, Icon, Left, ListItem, Right } from 'native-base'
import React from 'react'
import { View, Text,Image } from 'react-native'

export default DaysListItem = ({day, onClickDetailsDay}) => {

    const weekDay ={
    0: "Monday",
    1: "Tuesday",
    2: "Wednesday",
    3: "Thursday",
    4: "Friday",
    5: "Saturday",
    6: "Sunday",}

    return (
        //on press go to details
        <ListItem icon onPress={() => onClickDetailsDay(day)}>
            <Left>
                <Button>
                    <Image 
                        style={{height: 20, width: 30}}  
                        source={{ uri: `http://openweathermap.org/img/wn/${day.weather[0].icon}@4x.png`}}
                        >
                    </Image>
                </Button>

                <Text>  {day.temp.day} &#8451; </Text>
            </Left>
            <Body>
                <Text>{weekDay[new Date(day.dt * 1000).getDay()]}</Text>
            </Body>
            <Left>
                <Text>{day.temp.night} &#8451;</Text>
            </Left>
        </ListItem>
    )
}
