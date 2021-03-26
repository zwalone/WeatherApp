import { List } from 'native-base'
import React from 'react'
import { View } from 'react-native'
import HoursTempetureListItem from './HoursTempetureListItem'

export default HoursTempetureList = ({hourly, styles}) => {

    const list = hourly.map((el, key) =>
    <HoursTempetureListItem hour={el} key={key}/>
    )

    return (
        <View style={styles.HoursListView}>
            <List horizontal={true} showsHorizontalScrollIndicator={false} dataArray={hourly} 
                renderRow={(hour, key) =>(
                    <HoursTempetureListItem styles={styles} hour={hour} key={key} />
                )}>
            </List>
        </View>
    )
}
