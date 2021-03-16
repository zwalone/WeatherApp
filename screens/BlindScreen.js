import React from 'react'
import { View, Text } from 'react-native'
import { Button } from 'native-base'

export default function BlindScreen({navigation}) {
    return (
        <View>
            <Text></Text>
            <Button onPress={() => navigation.navigate('Normal')}><Text>Go to blind</Text></Button>
        </View>
    )
}
