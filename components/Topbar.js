import React from 'react'
import { Body, Button, Container, Header, Icon, Input, Item, Left, Right, Text } from 'native-base'
import { Ionicons , FontAwesome5} from '@expo/vector-icons';

export default function Topbar() {
    return (
        <Container>
            <Header searchBar rounded>
                <Item>
                    <Icon name='search'/>
                    <Input placeholder='City'></Input>
                    <Button transparent onPress={()=> console.log("searching...")}><Text>Search</Text></Button>
                </Item>
            </Header>
        </Container>
    )
}
