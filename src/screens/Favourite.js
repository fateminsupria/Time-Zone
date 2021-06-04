import React from 'react'
import {View, Text} from 'react-native'

const Favourite = () => {
    return(
        <View style={{
            justifyContent:"center",
            backgroundColor: "#483D8B",
            alignContent:"center",
            flex:1
        }}>
            <Text style={{
                                fontWeight:"bold",
                                fontSize:18,
                                color:"red"
            }}> Work Processing Of This Page ......</Text>
        </View>
    )
}
export default Favourite;