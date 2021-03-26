import { Body, Button, Left, ListItem, Right } from 'native-base'
import React from 'react'
import { Text } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default DetailsListTempItem = ({name, value, icon, styles}) => {
    return (
        <ListItem icon>
            <Left>
                <Button >
                    <MaterialCommunityIcons name={icon} size={24} color="white" />
                </Button>
            </Left>
            <Body>
                <Text style={styles.DLText}>{name}</Text>
            </Body>
            <Right>
                <Text style={styles.DLText}>{value.toFixed()} &#8451;</Text>
            </Right>
        </ListItem>
    )
}

