import { Container, Content } from 'native-base'
import React from 'react'
import { View, Text , StyleSheet, Image} from 'react-native'
import DetailsWeatherShort from '../components/DetailsWeatherShort'
import TempetureView from '../components/TempetureView'
import DetailsListTemp from '../components/DetailsListTemp'

export default DetailsDaysScreen = ({route , navigation}) => {

    const {day} = route.params.params
    console.log("DAY TEMP========" , day.temp)
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
        <Container>
            <Content style={styles.content}>
                <View style={styles.container}>
                    <Text style={styles.text}>{weekDay[new Date(day.dt * 1000).getDay()]}</Text>
                </View>

                <DetailsWeatherShort day={day}/>
                <DetailsListTemp temp={day.temp} fells_like={day.feels_like}></DetailsListTemp>
            </Content>
        </Container>
    )
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        paddingLeft: 24,
        paddingRight: 24,
    },
    text: {
        fontSize: 36,
    },
    container: {
        alignItems: 'center',
        padding: 80,
    },
})