import { Body, Button, Icon, Left, ListItem, Right } from 'native-base'
import React from 'react'
import { View, Text } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default DetailsListTempItem = ({name, value, icon}) => {
    return (
        <ListItem icon>
            <Left>
                <Button style={{backgroundColor: "#FF9501"}}>
                    <MaterialCommunityIcons name={icon} size={24} color="white" />
                </Button>
            </Left>
            <Body>
                <Text>{name}</Text>
            </Body>
            <Right>
                <Text>{value} &#8451;</Text>
            </Right>
        </ListItem>
    )
}

