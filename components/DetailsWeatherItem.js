import { Icon } from 'native-base'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default DatailsWeatherItem = () => {
    return (
        <View style={style.item}>
            
            <Icon name="default"></Icon>
            <Text>12312</Text>
        </View>
    )
}

const style = StyleSheet.create({
    item: {
        padding: 20,
        marginBottom: 5,
        width: 100,
        backgroundColor: 'blue',
        borderWidth: 4,
        borderRadius: 6
    }
})