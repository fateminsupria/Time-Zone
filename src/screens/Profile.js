import React from 'react'
import {View, Text} from 'react-native'

const Profile = () => {
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
                                color:"yellow"
            }}> Work Processing Of This Page ...... </Text>
        </View>
    )
}
export default Profile;