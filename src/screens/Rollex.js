import React from 'react'
import { View, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import SwiperComponentRollex from '../components/SwiperComponentRollex'

const Rollex = ({ navigation }) => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: "#FFF",

        }}>
            <View style={{
                flexDirection: "row",
                width: "100%",
                height: "90%"
            }}>
                <View style={{ width: "10%", paddingLeft: 20 }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image
                            // source={require('../images/17.png')}
                            // style={{ marginVertical: 40 }}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ width: "90%" }}>
                    <SwiperComponentRollex />
                </View>
            </View>

            <View style={{
                flexDirection: "row",
                marginTop: -80,
                marginHorizontal: 20,
                alignItems: "center"
            }}>
                <Text style={{
                    fontWeight: "bold",
                    fontSize: 28,
                    color: "#00008B"
                }}>
                    Rolex
                            </Text>
                <Text style={{
                    fontWeight: "bold",
                    color: "#800000",
                    paddingLeft: 170,
                    fontSize: 20
                }}>
                    $1000
                </Text>
            </View>

            <Text style={{
                paddingHorizontal: 20,
                fontWeight: "bold",
                color: "#000",
                paddingTop: 3,
                fontSize: 20
            }}>
                Series I
            </Text>

            <View style={{
                flexDirection: "row",
                width: "100%"
            }}>
                <View style={{
                    width: "50%",
                    backgroundColor: "#483D8B",
                    height: 70,
                    marginTop: 20,
                    borderTopRightRadius: 25,
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <TouchableOpacity
                        onPress={() => alert('Your Order Has Been Successful')}>
                        <Text style={{
                            color: "#FFF",
                            fontSize: 17
                        }}>Buy Now</Text>
                    </TouchableOpacity>
                </View>

                <View style={{
                    width: "50%",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 20
                }}>
                    <Text style={{
                        color: "#62636a",
                        fontWeight: "bold",
                        fontSize: 17
                    }}>Description</Text>
                </View>
            </View>

        </View>
    )
}
export default Rollex;