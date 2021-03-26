import { List,Separator } from 'native-base'
import React from 'react'
import { View, Text } from 'react-native'
import DetailsListTempItem from './DetailsListTempItem'

export default DetailsListTemp = ({temp, fells_like, styles}) => {
    return (
        <List>
            <Separator style={styles.DLTitle} bordered>
                <Text style={styles.DLTitle}>Tempeture</Text>
            </Separator>
            <DetailsListTempItem styles={styles} name={"Day"} value={temp.day} icon={"weather-sunny"}></DetailsListTempItem>
            <DetailsListTempItem styles={styles} name={"Morgin"} value={temp.morn} icon={"weather-sunset-up"}></DetailsListTempItem>
            <DetailsListTempItem styles={styles} name={"Evening"} value={temp.eve} icon={"weather-sunset-down"}></DetailsListTempItem>
            <DetailsListTempItem styles={styles} name={"Night"} value={temp.night} icon={"moon-waning-crescent"}></DetailsListTempItem>
            <Separator style={styles.DLTitle} bordered>
                <Text style={styles.DLTitle}>Perceptible temperature</Text>
            </Separator >
            <DetailsListTempItem styles={styles} name={"Day"} value={fells_like.day} icon={"weather-sunny"}></DetailsListTempItem>
            <DetailsListTempItem styles={styles} name={"Morgin"} value={fells_like.morn} icon={"weather-sunset-up"}></DetailsListTempItem>
            <DetailsListTempItem styles={styles} name={"Evening"} value={fells_like.eve} icon={"weather-sunset-down"}></DetailsListTempItem>
            <DetailsListTempItem styles={styles} name={"Night"} value={fells_like.night} icon={"moon-waning-crescent"}></DetailsListTempItem>
            <Separator style={styles.DLTitle} bordered>
                <Text style={styles.DLTitle}>Min Max</Text>
            </Separator>
            <DetailsListTempItem styles={styles} name={"MIN"} value={temp.min} icon={"arrow-up-bold"}></DetailsListTempItem>
            <DetailsListTempItem styles={styles} name={"MAX"} value={temp.max} icon={"arrow-down-bold"}></DetailsListTempItem>
        </List>
    )
}
