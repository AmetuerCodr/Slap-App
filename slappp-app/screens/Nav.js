import React from "react";
import { View, StyleSheet, ScrollView, Image, TouchableWithoutFeedback } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

// import Home from './screens/Home';
// import Main from './screens/Main'
// import Terms from './screens/Terms';
export default function Nav() {
    return (
        <View style={styles.container}>
            <View style={styles.nav}>

                <View style={styles.border}></View>
                <TouchableWithoutFeedback>
                    <Entypo name="home" color="black" style={styles.icon} />
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
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
        paddingBottom: '5%',
        position: 'reaative',
        // paddingBottom: '9%',
        paddingTop: '40%'


    },
    border: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: '100%',
        height: '151%',
        // backgroundColor: 'cyan',
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
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        // backgroundColor: 'cyan'
    }
})