import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Button, TouchableWithoutFeedback } from 'react-native';
import Home from './screens/Home';
import Main from './screens/Main'
import Terms from './screens/Terms';
export default function App() {
    const [showApp, setShowApp] = useState(true)

    if (showApp) {
        return (
            <ScrollView>
                <Main />
                <Button
                    title="hello"
                    onPress={() => {
                        setShowApp(!showApp)
                    }} />
            </ScrollView>
        )
    }
}