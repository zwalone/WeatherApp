import { List } from 'native-base'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import HoursTempetureListItem from './HoursTempetureListItem'

export default HoursTempetureList = ({hourly}) => {

    const list = hourly.map((el, key) =>
    <HoursTempetureListItem hour={el} key={key}/>
    )

    return (
        <View style={styles.view}>
            <List horizontal={true} showsHorizontalScrollIndicator={false} dataArray={hourly} 
                renderRow={(hour, key) =>(
                    <HoursTempetureListItem hour={hour} key={key} />
                )}>
            </List>
        </View>
    )
}


const styles = StyleSheet.create({
    view:
    {
        justifyContent: "center",
        alignContent: "center",
        marginLeft: 10,
        margin: 16,
    },
});