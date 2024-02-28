import React from 'react';
import { View, Text, Button, StyleSheet, Linking, ImageBackground } from 'react-native';

const Accept = ({ handleAgree, style, textStyle }) => {
    return (
        <View>
            <ImageBackground source={require('../assets/page.jpg')} style={style}>
                < Text style={{ ...textStyle, fontWeight: 'bold', fontFamily: "Helvetica", fontSize: 30, color: 'white', textAlign: 'center' }}>
                    By using this Application our Terms and Conditions And Privacy Policy
                </Text>
                <View style={{ paddingLeft: '9%' }}>
                    <Button title="Read the Terms & Conditions & privacy policy" onPress={() => {
                        const url = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
                        Linking.openURL(url);
                    }
                    } />
                    <Button title="I Agree" onPress={handleAgree} />
                </View>
            </ImageBackground>

        </View >
    );
};

const styles = StyleSheet.create({
    acceptContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default Accept;