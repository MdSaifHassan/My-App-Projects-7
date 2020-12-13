import React, { useEffect } from "react";
import { Animated, Easing, SectionList, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const DashBord = () => {
    let opacity = new Animated.Value(0);
    useEffect(() => {
        animate(Easing.bounce)
    }, [])
    const animate = easing => {
        opacity.setValue(0);
        Animated.timing(opacity, {
            toValue: 1,
            duration: 1200,
            easing
        }).start();
    };

    const size = opacity.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 340]
    });

    const animatedStyles = [
        styles.box,
        {
            opacity,
            width: size,
            height: size
        }
    ];

    return (
        <View style={styles.container}>
            <View style={styles.boxContainer}>
                <Animated.View style={animatedStyles}>

                    <Text>Rakib</Text>
                </Animated.View>
            </View>
            <TouchableOpacity
                onPress={() => animate(Easing.bounce)}
            >
                <Text style={{
                    color: "#fff"
                }}>Bounce</Text>
            </TouchableOpacity>
        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#20232a"
    },
    title: {
        marginTop: 10,
        textAlign: "center",
        color: "#61dafb"
    },
    boxContainer: {
        height: 160,
        alignItems: "center"
    },
    box: {
        marginTop: 32,
        borderRadius: 4,
        backgroundColor: "#61dafb",
        width: '100%',
        height: '70%'
    },
    list: {
        backgroundColor: "#fff"
    },
    listHeader: {
        paddingHorizontal: 8,
        paddingVertical: 4,
        backgroundColor: "#f4f4f4",
        color: "#999",
        fontSize: 12,
        textTransform: "uppercase"
    },

});

export default DashBord;