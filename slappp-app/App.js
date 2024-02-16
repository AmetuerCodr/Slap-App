import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Nav from './screens/Nav';
import Main from './screens/Main';
import Home from './screens/Home';

export default function App() {
    const [showApp, setShowApp] = useState(true);

    return (
        <ScrollView>
            {showApp ? <Main /> : null}
            <Nav />

            {/* You can add other components conditionally here */}
        </ScrollView>
    );
}

