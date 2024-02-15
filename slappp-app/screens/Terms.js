import React from "react";
import { View, Text, StyleSheet, Button } from 'react-native'

export default function Terms() {
    // let language = route.params.language;
    // let greetings = language
    return (
        <View style={{ ...styles.termsContainer, display: button }}>
            <ScrollView >
                <Text style={styles.intro}>
                    Welcome to The Terms and Conditions of Using Slap (App)
                    by using this Software you automatically agree
                    to these Terms and Conditions so please read them carefully...
                </Text>
                <Text style={styles.body}>
                    this app is for Entertainment/Recreational/Fun/Enjoyment/Leisure
                    purposes only. The Developer of this App/Application is not
                    responsible for any unwanted use of this App/Application.
                    The user assumes all risk associated with the use of the
                    software. THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY
                    OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
                    TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
                    PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
                    COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR
                    OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
                    TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
                    WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
                    The Developer of this app or the Affiliates involved with
                    the creation of this App, Any Parents/Guardian affiliated with the Developer
                    are Not responsible for any unwanted physical contact
                    Intentional or unintentional
                </Text>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    termsContainer: {
        position: 'absolute',
        bottom: 0,
        left: 10,
        right: 10,
        padding: 20,
        marginTop: '0.0001%',
    },
    intro: {
        fontWeight: '900',
        marginBottom: 10,
    },
})
