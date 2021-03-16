import { List } from 'native-base'
import React from 'react'
import { View, Text } from 'react-native'
import { useState } from 'react/cjs/react.development'
import DaysListItem from './DaysListItem'

export default DaysList = ({daysList}) => {
    //console.log(daysList[5].clouds)
    const elo = daysList.map((el) =>
        <DaysListItem day={el} />
    )
    return (
        <List>
            {elo}
        </List>
    )
}
