import React from 'react'
import { View,Text } from 'react-native'
import { Link } from 'react-router-native'

const Stories = () => {
    return (
        <View style={{flex:1,backgroundColor:"#000"}}>
            <Link to="/">
                <View style={{backgroundColor:"#fff",paddingVertical:20}}>
                    <Text>
                        GO HOme
                    </Text>
                </View>
            </Link>
            <Text>test</Text>
        </View>
    )
}

export default Stories
