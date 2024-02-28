import React from "react";
import { View, Text, StyleSheet, Button, Image } from 'react-native'


export default function Home() {
    return (
        <View>
            <Image style={{ opacity: 0.01 }} source={require('../assets/page.png')} />
        </View>
    )

}