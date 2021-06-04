import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home'
import Favourite from '../screens/Favourite'
import Profile from '../screens/Profile'
import { Image } from 'react-native'

import Patek from '../screens/Patek'
import Omega from '../screens/Omega'
import Rollex from '../screens/Rollex'

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                style: {
                    height: 65,
                    justifyContent: "center",
                    paddingVertical: 15,
                    backgroundColor: "#6495ED",
                    elevation: 2
                }
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: "",
                    tabBarIcon: ({ color, size }) => (
                        <Image
                            source={require("../images/8.png")}
                            style={{ height: 20, width: 20 }}
                        />
                    )
                }}
            />

            <Tab.Screen
                name="Favourite"
                component={Favourite}
                options={{
                    tabBarLabel: "",
                    tabBarIcon: ({ color, size }) => (
                        <Image
                            source={require("../images/9.png")}
                            style={{ height: 20, width: 20 }}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: "",
                    tabBarIcon: ({ color, size }) => (
                        <Image
                            source={require("../images/10.png")}
                            style={{ height: 20, width: 20 }}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    );
};


const Stack = createStackNavigator();
const screenOptionStyle = {
    headerShown: false
}

const HomeStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Home" component={BottomTabNavigator} />
            <Stack.Screen name="Patek" component={Patek} />
            <Stack.Screen name="Omega" component={Omega} />
            <Stack.Screen name="Rollex" component={Rollex} />
        </Stack.Navigator>
    )
}

export default HomeStackNavigator;