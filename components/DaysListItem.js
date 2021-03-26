import { Body, Button, Icon, Left, ListItem, Right } from 'native-base'
import React from 'react'
import { View, Text,Image } from 'react-native'

export default DaysListItem = ({day, onClickDetailsDay, styles}) => {

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
        <ListItem icon  onPress={() => onClickDetailsDay(day)}>
            <Left>
                <Button>
                    <Image 
                        style={{height: 30, width: 30}}  
                        source={{ uri: `http://openweathermap.org/img/wn/${day.weather[0].icon}@4x.png`}}
                        >
                    </Image>
                </Button>

                <Text style={styles.DLText}>  {day.temp.day.toFixed()} &#8451; </Text>
            </Left>
            <Body >
                <View style={{alignItems: 'center'}}>
                <Text style={styles.DLText}>{weekDay[new Date(day.dt * 1000).getDay()]}</Text>
                </View>
            </Body>
            <Left>
                <Text style={styles.DLText}>{day.temp.night.toFixed()} &#8451;</Text>
            </Left>
        </ListItem>
    )
}
