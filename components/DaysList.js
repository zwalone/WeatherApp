import { List } from 'native-base'
import React from 'react'
import { View, Text } from 'react-native'
import { useState } from 'react/cjs/react.development'
import DaysListItem from './DaysListItem'

export default DaysList = ({daysList, onClickDetailsDay}) => {

    const list = daysList.map((el, key) =>
        <DaysListItem day={el} key={key} onClickDetailsDay={onClickDetailsDay}/>
    )
    return (
        <List>
            {list}
        </List>
    )
}
