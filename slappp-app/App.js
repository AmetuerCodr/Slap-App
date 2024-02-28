import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView, Dimensions, TouchableWithoutFeedback, ImageBackground, Linking } from 'react-native';
import Main from './screens/Main';
import Home from './screens/Home';
import Terms from './screens/Terms';
import Accept from './screens/Accept';
import * as SecureStore from 'expo-secure-store'; // Or use AsyncStorage
import * as Font from 'expo-font';
// Get the height of the window
const windowHeight = Dimensions.get('window').height;

// ... your other imports



// ... (Rest of your existing App component code)

export default function App() {
    const [home, setHome] = useState(true);
    const [main, setMain] = useState(true)
    const [terms, setTerms] = useState(false);
    let [hasAgreed, setHasAgreed] = useState(false);

    const AGREEMENT_KEY = 'userHasAgreed';

    // ... (Rest of your existing App component code)


    const saveAgreement = async () => {
        await SecureStore.setItemAsync(AGREEMENT_KEY, 'true');
        setHasAgreed(true); // Update component state for immediate rendering change
    };

    const checkAgreement = async () => {
        const agreed = await SecureStore.getItemAsync(AGREEMENT_KEY);
        setHasAgreed(agreed === 'true');
    };


    async function deleteAccept() {
        await SecureStore.deleteItemAsync(AGREEMENT_KEY);
    }
    deleteAccept()
    useEffect(() => {
        checkAgreement(); // Check agreement on app load
    }, []);

    const openWebsite = () => {
        const url = 'https://www.privacypolicies.com/live/f1217916-be2c-4e4c-a1f2-bd4f66df2f4a'; // Replace 'https://example.com' with your desired URL
        Linking.openURL(url);
    };


    return (
        <ScrollView style={styles.container}>
            {hasAgreed && <Main />}
            {!hasAgreed && <Accept handleAgree={saveAgreement} style={{ height: windowHeight, alignItems: 'center', justifyContent: 'center', padding: '10%', borderRadius: 10 }} textStyle={{ zIndex: 99999, padding: 5, maxWidth: '75%' }} />}
        </ScrollView>
    );


}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})