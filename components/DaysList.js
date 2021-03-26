import { List, Separator } from 'native-base'
import React from 'react'
import { Text } from 'react-native'
import DaysListItem from './DaysListItem'

export default DaysList = ({daysList, onClickDetailsDay, styles}) => {

    const list = daysList.map((el, key) =>
        <DaysListItem styles={styles} day={el} key={key} onClickDetailsDay={onClickDetailsDay}/>
    )
    return (
        <List icon>
            <Separator style={styles.DLTitle}>
                    <Text style={styles.DLTitle}>Tempeture Day / Night</Text>
            </Separator>
            {list}
        </List>
    )
}
