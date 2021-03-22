import { List,Separator } from 'native-base'
import React from 'react'
import { View, Text } from 'react-native'
import DetailsListTempItem from './DetailsListTempItem'

export default DetailsListTemp = ({temp, fells_like}) => {
    return (
        <List>
            <Separator bordered>
                <Text>Tempeture</Text>
            </Separator>
            <DetailsListTempItem name={"Day"} value={temp.day} icon={"weather-sunny"}></DetailsListTempItem>
            <DetailsListTempItem name={"Morgin"} value={temp.morn} icon={"weather-sunset-up"}></DetailsListTempItem>
            <DetailsListTempItem name={"Evening"} value={temp.eve} icon={"weather-sunset-down"}></DetailsListTempItem>
            <DetailsListTempItem name={"Night"} value={temp.night} icon={"moon-waning-crescent"}></DetailsListTempItem>
            <Separator bordered>
                <Text>Perceptible temperature</Text>
            </Separator>
            <DetailsListTempItem name={"Day"} value={fells_like.day} icon={"weather-sunny"}></DetailsListTempItem>
            <DetailsListTempItem name={"Morgin"} value={fells_like.morn} icon={"weather-sunset-up"}></DetailsListTempItem>
            <DetailsListTempItem name={"Evening"} value={fells_like.eve} icon={"weather-sunset-down"}></DetailsListTempItem>
            <DetailsListTempItem name={"Night"} value={fells_like.night} icon={"moon-waning-crescent"}></DetailsListTempItem>
            <Separator bordered>
                <Text>Min Max</Text>
            </Separator>
            <DetailsListTempItem name={"MIN"} value={temp.min} icon={"arrow-up-bold"}></DetailsListTempItem>
            <DetailsListTempItem name={"MAX"} value={temp.max} icon={"arrow-down-bold"}></DetailsListTempItem>
        </List>
    )
}
