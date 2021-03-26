import React from 'react'
import { View, Text} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export default DatailsWeatherItem = ({name , value, icon, styles}) => {
    return (
        <View style={styles.DetailItem}>
            <MaterialCommunityIcons style={styles.DetailIcon} name={icon} size={50} color="black" />
            <Text style={styles.DetailTitle}>{name}</Text>
            <Text style={styles.DetailValue}>{value}</Text>
        </View>
    )
}
