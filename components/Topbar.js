import React, {useState} from 'react'
import { Button, Header, Icon, Input, Item, Text } from 'native-base'

export default Topbar = ({handler, styles}) => {

    const [cityName, setCityName] = useState("")

    return (
        <Header style={styles.TopBar} searchBar rounded>
            <Item>
                <Icon name='search'/>
                <Input placeholder='City'
                    onChangeText={val => setCityName(val)}
                ></Input>
                <Button transparent onPress={()=> {handler(cityName)}}><Text>Search</Text></Button>
            </Item>
        </Header>
    )
}
