import React, { useRef, useEffect } from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View, Animated } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
export default function Login({ navigation }) {


    const fadeAnim = useRef(new Animated.Value(400)).current
    React.useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 0,
                duration: 2000,
            }
        ).start();
    }, [fadeAnim])
    return (

        <Animated.View style={{ ...styles.container, transform: [{ translateX: fadeAnim }] }}>
            <View style={styles.CardView}>
                <View style={{ width: "20%", height: "22%", backgroundColor: '#0041C2', alignSelf: 'center', marginTop: "-10%", marginBottom: 7, borderRadius: 40, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, color: "lightblue" }}>Saif</Text>
                </View>
                <TextInput placeholder="Enter Your User Name" style={{ ...styles.TextInput, marginBottom: 10 }} />
                <TextInput placeholder="Enter Your Password" style={styles.TextInput} />

                <TouchableOpacity style={styles.Button}
                    onPress={() => navigation.navigate('NextScreen')}
                >
                    <Text style={{ fontSize: 20, color: '#fff', fontWeight: "800", }}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ alignSelf: 'center', marginTop: 5 }}
                    onPress={() => navigation.navigate('SignUp')}
                >
                    <Text style={{ fontSize: 15, color: '#fff', fontWeight: "800", }}>Sign Up</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "column", flex: 0.4, width: '90%', }}>
                <TouchableOpacity style={styles.BottomBtn}>
                    <Text style={{ fontSize: 15, color: "black", fontWeight: "bold" }}>Login With Google</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.BottomBtn}>
                    <Text style={{ fontSize: 15, color: '#fff', fontWeight: "bold" }}>Login With FaceBook</Text>
                </TouchableOpacity>
            </View>
        </Animated.View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0000A0",
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingTop: 20
    },
    CardView: {
        width: "80%",
        height: 300,
        backgroundColor: "#2B65EC",
        borderRadius: 10,
        paddingTop: "10%",
    },
    TextInput: {
        backgroundColor: "#fff",
        marginHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 10,
        paddingHorizontal: 5
    },
    Button: {
        alignSelf: "center",
        borderWidth: 1,
        marginTop: "7%",
        backgroundColor: "#7F38EC",
        borderRadius: 20,
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 6,

    },
    BottomBtn: {
        width: "90%",
        height: "20%",
        backgroundColor: 'red',
        alignSelf: 'center',
        marginTop: 3,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
        borderRadius: 20
    }
});
