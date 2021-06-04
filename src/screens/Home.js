import React from 'react'
import { View, Text, Image} from 'react-native'
import { TextInput, ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { LinearGradient } from 'expo-linear-gradient'

const Home = ({ navigation }) => {
    return (
        <View style={{
            backgroundColor: "#ADD8E6",
            flex: 1
        }}>
            <View style={{
                backgroundColor: "#6495ED",
                height: "28%",
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
                paddingHorizontal: 20
            }}>
                <Image
                    source={require('../images/1.png')}
                    style={{
                        height: 10,
                        width: 20,
                        marginTop: 50
                    }}
                />
                <View style={{
                    flexDirection: "column",
                    alignItems: "center",
                    marginTop: 25,
                    width: "100%"
                }}>
                    <View style={{ width: "50%" }}>
                        <Text style={{
                            fontSize: 28,
                            color: "#000",
                            fontWeight: "bold"
                        }}> Time Zone </Text>
                    </View>
                </View>
            </View>
            <LinearGradient
                colors={["rgba(0,164,109,0.4)", "transparent"]}
                style={{
                    left: 0,
                    right: 0,
                    height: 90,
                    marginTop: -45
                }}
            >
            </LinearGradient>


            <View style={{
                flexDirection: "row",
                paddingHorizontal: 20,
                width: "100%",
                alignItems: "center"
            }}>
                <View style={{ width: "50%" }}>
                    <Text style={{
                        fontWeight: "bold",
                        fontSize: 17,
                        color: "#585a61"
                    }}></Text>
                    <View style={{
                        height: 4,
                        backgroundColor: "#b1e5d3",
                        width: 0,
                        marginTop: -5
                    }}>

                    </View>

                </View>
                <View style={{ width: "50%", alignItems: "flex-end" }}>
                    <View style={{
                        backgroundColor: "#483D8B",
                        paddingHorizontal: 20,
                        paddingVertical: 5,
                        borderRadius: 15
                    }}>
                        <Text style={{
                            fontWeight: "bold",
                            fontSize: 13,
                            color: "#FFF"
                        }}>New Collections</Text>
                    </View>
                </View>
            </View>



            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{ height: 400 }}
            >
                <LinearGradient
                    colors={["rgba(0,164,109,0.09)", "transparent"]}
                    style={{
                        position: "absolute",
                        left: 0,
                        right: 0,
                        height: 100,
                        marginTop: 220,
                        top: 0
                    }}
                />
                <TouchableOpacity
                    onPress={() => navigation.navigate("Omega")}
                    style={{
                        height: 250,
                        elevation: 2,
                        backgroundColor: "#FFF",
                        marginLeft: 20,
                        marginTop: 20,
                        borderRadius: 15,
                        marginBottom: 10,
                        width: 160
                    }}
                >
                    <Image
                        source={require('../images/123.jpeg')}
                    />
                    <View style={{
                        flexDirection: "row",
                        paddingTop: 10,
                        paddingHorizontal: 10
                    }}>
                        <Text style={{
                            fontWeight: "bold",
                            color: "#00008B"
                        }}>Rolex</Text>
                        <Text style={{
                            fontWeight: "bold",
                            color: "#800000",
                            paddingLeft: 35
                        }}>$1500</Text>
                    </View>
                    <Text style={{
                        paddingHorizontal: 10,
                        fontWeight: "bold",
                        color: "#b1e5d3",
                        paddingTop: 3
                    }}>
                        Series III
                        </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate("Patek")}
                    style={{
                        height: 250,
                        elevation: 2,
                        backgroundColor: "#FFF",
                        marginLeft: 20,
                        marginTop: 20,
                        borderRadius: 15,
                        marginBottom: 10,
                        width: 160
                    }}
                >
                    <Image
                        source={require('../images/Rollex.jpg')}
                    />
                    <View style={{
                        flexDirection: "row",
                        paddingTop: 10,
                        paddingHorizontal: 10
                    }}>
                        <Text style={{
                            fontWeight: "bold",
                            color: "#00008B"
                        }}>Rolex</Text>
                        <Text style={{
                            fontWeight: "bold",
                            color: "#800000",
                            paddingLeft: 45
                        }}>$1200</Text>
                    </View>
                    <Text style={{
                        paddingHorizontal: 10,
                        fontWeight: "bold",
                        color: "#b1e5d3",
                        paddingTop: 3
                    }}>
                        Series II
                        </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate("Rollex")}
                    style={{
                        height: 250,
                        elevation: 2,
                        backgroundColor: "#FFF",
                        marginLeft: 20,
                        marginTop: 20,
                        borderRadius: 15,
                        marginBottom: 10,
                        width: 160
                    }}
                >
                    <Image
                        source={require('../images/rolex.jpg')}
                    />
                    <View style={{
                        flexDirection: "row",
                        paddingTop: 10,
                        paddingHorizontal: 10
                    }}>
                        <Text style={{
                            fontWeight: "bold",
                            color: "#00008B"
                        }}>Rolex</Text>
                        <Text style={{
                            fontWeight: "bold",
                            color: "#800000",
                            paddingLeft: 35
                        }}>$1000</Text>
                    </View>
                    <Text style={{
                        paddingHorizontal: 10,
                        fontWeight: "bold",
                        color: "#b1e5d3",
                        paddingTop: 3
                    }}>
                        Series I
                        </Text>
                </TouchableOpacity>

            </ScrollView>
        </View>
    )
}
export default Home;