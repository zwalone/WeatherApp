import { Icon } from 'native-base'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export default DatailsWeatherItem = ({name , value, icon}) => {
    return (
        <View style={style.item}>
            <Text style={style.title}>{name}</Text>
            {/* <Icon style={style.icon} name="weather-sunset-up"></Icon> */}
            <MaterialCommunityIcons style={style.icon} name={icon} size={50} color="black" />
            <Text style={style.value}>{value}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    item: {
        padding: 20,
        marginRight: 5,
        marginBottom: 5,
        width: 100,
        backgroundColor: 'blue',
        borderWidth: 4,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: { 
        position: 'absolute',
        opacity: 0.1,
        zIndex: -3,
    },
    title: {
        fontSize: 12,
    },
    value: {
        fontSize: 16,
        fontWeight: 'bold',
    }
})