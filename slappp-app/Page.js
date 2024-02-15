import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default function Page() {
    return (
        <View style={styles.container}>
            <Image source={require('./assets/logo.png')}
                style={styles.logo}></Image>
            <Image source={require('./assets/talk-to-the-hand.png')} style={styles.image}></Image>
        </View>
    )
}
const styles = StyleSheet.create({
    logo: {
        width: 230,
        height: 230,
        marginBottom: 50,
    },
    image: {
        width: 250,
        height: 250,
        marginBottom: '10%'

    }
})