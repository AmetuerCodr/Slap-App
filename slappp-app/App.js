import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, Dimensions, TouchableWithoutFeedback, Image } from 'react-native';
import Nav from './screens/Nav';
import Main from './screens/Main';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import Home from './screens/Home';
import Terms from './screens/Terms';


export default function App() {
    const [home, setHome] = useState(true);
    const [terms, setTerms] = useState(false);

    const toggleHome = () => {
        setHome(!home);
    };

    const toggleTerms = () => {
        setTerms(!terms);
        setHome(!home)
        console.log('terms has been toggled');
    };
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.nav}>
                    <View style={styles.border}></View>
                    <TouchableWithoutFeedback onPress={toggleHome}>
                        <View style={styles.iconContainer}>
                            <Entypo name="home" color="black" style={styles.icon} />
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={toggleTerms}>
                        <View style={styles.iconContainer}>
                            <FontAwesome5 name="file-contract" color="black" style={styles.icon} />
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </View>
            {home && <Main />}
            {terms && <Terms />}
            {/* <Nav /> */}
            {/* You can add other components conditionally here */}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    nav: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        position: 'relative',
        bottom: 70, // Adjust according to your requirements
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
    iconContainer: {
        zIndex: 1, // Adjust z-index as needed
    },
    icon: {
        fontSize: 50,
    },
    image: {
        width: 80,
        height: 80,
    },
});
