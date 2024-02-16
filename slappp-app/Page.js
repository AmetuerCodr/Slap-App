import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, Image, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
const scaleFactor = Math.min(width, height) / 375; // Adjust the base scale factor as needed
export default function Page() {
    return (
        <View style={styles.container}>
            <Image source={require('./assets/logo.png')}
                style={styles.logo}></Image>
        </View>
    )
}
// { fontSize:  }
const styles = StyleSheet.create({
    logo: {
        width: 160 * scaleFactor,
        height: 160 * scaleFactor,
        marginTop: '32%',
    },
})