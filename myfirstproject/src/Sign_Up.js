import React, { useRef, useEffect } from 'react';
import { Button, StyleSheet, Text, Easing, TextInput, TouchableOpacity, View, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
export default function Sign_Up({ navigation }) {
    let opacity = new Animated.Value(0);
    const size = opacity.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 80]
    });
    const animatedStyles = [
        styles.box,
        {
            opacity,
            width: size,
            height: size,

        }
    ];
    const animate = easing => {
        opacity.setValue(0);
        Animated.timing(opacity, {
            toValue: 1,
            duration: 1200,
            easing
        }).start();
    };
    return (

        <Animated.View style={{
            ...styles.animatedStyles, flex: 1,
            backgroundColor: "#0000A0",
            alignItems: 'center',
            justifyContent: 'space-evenly',
            paddingTop: 20,
        }}
        // onPress={() => animate(Easing.sin)}
        >
            <View style={styles.CardView}>
                <View style={{ width: "25%", height: "22%", backgroundColor: '#0041C2', alignSelf: 'center', marginTop: "-10%", marginBottom: 7, borderRadius: 90, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, color: "lightblue" }}>Saif</Text>
                </View>
                <TextInput placeholder="Enter Your first Name" style={{ ...styles.TextInput, marginBottom: 10 }} />
                <TextInput placeholder="Enter Your last Name" style={styles.TextInput} />
                <TextInput placeholder="Enter Your Email" style={{ ...styles.TextInput, marginBottom: 10, marginTop: 10 }} />
                <TextInput placeholder="Enter Your Password" style={styles.TextInput} />

                <TouchableOpacity style={styles.Button}
                    onPress={() => navigation.navigate("Login")}
                >
                    <Text style={{ fontSize: 20, color: '#fff', fontWeight: "800", }}>Sign Up</Text>
                </TouchableOpacity>

            </View>
            <View style={{ flexDirection: "column", flex: 0.4, width: '90%', }}>
                <TouchableOpacity style={{ ...styles.BottomBtn, backgroundColor: 'white' }}>
                    <Text style={{ fontSize: 15, color: "black", fontWeight: "bold" }}>Login With Google</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.BottomBtn}>
                    <Text style={{ fontSize: 15, color: '#fff', fontWeight: "bold" }}>Login With FaceBook</Text>
                </TouchableOpacity>
            </View>
        </Animated.View>
    );
}

const styles = StyleSheet.create({

    CardView: {
        width: "80%",
        maxHeight: "65%",
        backgroundColor: "#2B65EC",
        borderRadius: 10,
        paddingTop: "10%",
        paddingVertical: 30
    },
    TextInput: {
        backgroundColor: "#fff",
        marginHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 100,
        paddingHorizontal: 10
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
        backgroundColor: 'blue',
        alignSelf: 'center',
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
        borderRadius: 20
    }
});