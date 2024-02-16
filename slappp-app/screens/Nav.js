import React, { useState } from "react";
import { View, StyleSheet, ScrollView, Image, TouchableWithoutFeedback, Dimensions } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'
import { Accelerometer } from 'expo-sensors';
import { Audio } from 'expo-av';


const { width, height } = Dimensions.get('window');
const scaleFactor = Math.min(width, height) / 100; // Adjust the base scale factor as needed

// import Home from './screens/Home';
// import Main from './screens/Main'
import Terms from './Terms';
export default function Nav({ homefunc, termsfunc }) {

    return (
        <View style={styles.container}>
            <View style={styles.nav}>

                <View style={styles.border}></View>
                <TouchableWithoutFeedback onPress={homefunc}>
                    <Entypo name="home" color="black" style={styles.icon} />
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={termsfunc}>
                    <FontAwesome5 name="file-contract" color="black" style={styles.icon} />
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                    <Image source={require('../assets/talk-to-the-hand.png')} style={styles.image} />
                </TouchableWithoutFeedback>
            </View>
        </View>


    )
}

const styles = StyleSheet.create({
    nav: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        // paddingBottom: '75%',
        position: 'relative',
        bottom: 70 * scaleFactor,
        // backgroundColor: 'gray'/


    },
    border: {
        position: 'absolute',
        borderRadius: 30,
        bottom: 0,
        right: 0,
        width: '100%',
        height: '600%',
        backgroundColor: 'cyan',
        opacity: 0.4
    },

    icon: {
        fontSize: 50,
        // Add height for consistency
    },
    image: {
        width: 80,
        height: 80,
    },
    // container: {
    //     flex: 1,
    //     backgroundColor: 'green',

    //     // backgroundColor: 'cyan'
    // }
})