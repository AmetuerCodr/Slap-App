
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Button, TouchableWithoutFeedback } from 'react-native';
import { Accelerometer } from 'expo-sensors';
import { Audio } from 'expo-av';
import { FontAwesome5, FontAwesome } from '@expo/vector-icons';
import Page from './Page';
const soundFiles = [require('./assets/soundEffect1.mp3'),
require('./assets/soundEffect2.mp3'),
require('./assets/soundEffect3.mp3'),
require('./assets/soundEffect4.mp3'),
require('./assets/soundEffect5.mp3'),]

export default function ShakeDetector() {
  const [sound, setSound] = useState();
  const [mute, setMute] = useState(false);
  const [lastShakeTime, setLastShakeTime] = useState(0);
  const [button, setButton] = useState('')
  const [mTop, setmTop] = useState('20%')


  const playSound = async (soundFile) => {
    if (!mute) {
      console.log('Loading Sound');
      const { sound } = await Audio.Sound.createAsync(soundFile);
      setSound(sound);
      console.log('Playing Sound');
      await sound.playAsync();
    }
  };

  useEffect(() => {
    return sound ? async () => {
      console.log('Unloading Sound');
      await sound.unloadAsync();
    } : undefined;
  }, [sound]);

  const playRandomSound = () => {
    if (!mute) {
      const randIndex = Math.floor(Math.random() * soundFiles.length);
      playSound(soundFiles[randIndex]);
    }
  };

  const handleShake = () => {
    const now = Date.now();
    if (now - lastShakeTime > 350) {
      playRandomSound();
      setLastShakeTime(now);
    }
  };

  useEffect(() => {
    const threshold = 1;
    let lastAcceleration = { x: 0, y: 0, z: 0 };

    const subscription = Accelerometer.addListener((accelerometerData) => {
      const { x, y, z } = accelerometerData;
      const accelerationChange =
        Math.abs(x - lastAcceleration.x) +
        Math.abs(y - lastAcceleration.y) +
        Math.abs(z - lastAcceleration.z);

      if (accelerationChange > threshold) {
        handleShake();
      }

      lastAcceleration = { x, y, z };
    });

    return () => {
      subscription.remove();
    };
  }, [lastShakeTime]);

  const toggleMute = async () => {
    console.log('mute toggled');
    setMute(!mute);

    if (sound && !mute) {
      console.log('Stopping Sound');
      await sound.stopAsync();
    }
  };

  return (
    <View style={styles.container}>

      <ScrollView style={styles.scrollView}>
        <TouchableWithoutFeedback onPress={toggleMute}>
          <View style={styles.mute}>
            {mute ? (
              <FontAwesome5 name="volume-mute" size={24} color="black" />
            ) : (
              <FontAwesome name="volume-up" size={24} color="black" />
            )}
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.contentContainer}>
          <Page />
          <Text style={styles.text}>Shake your device mimicking a slapping action (But don't actually slap someone!)</Text>

        </View>
      </ScrollView>
      {/* <View style={{ ...styles.termsContainer, display: button }}> */}
      {/* <ScrollView > */}
      {/* <Text style={styles.intro}>
            Welcome to The Terms and Conditions of Using Slap (App)
            by using this Software you automatically agree
            to these Terms and Conditions so please read them carefully...
          </Text> */}
      {/* <Text style={styles.body}>
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
          </Text> */}
      {/* </ScrollView> */}
    </View>
    // </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative'
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
    paddingVertical: 16,
  },
  mute: {
    position: 'absolute',
    right: 40,
    top: 60,
    zIndex: 9000,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    maxWidth: 440,
    marginBottom: 16,
  },
  // termsContainer: {
  //   position: 'absolute',
  //   bottom: 0,
  //   left: 10,
  //   right: 10,
  //   padding: 20,
  //   marginTop: '0.0001%',
  // },
  // intro: {
  //   fontWeight: '900',
  //   marginBottom: 10,
  // },
  body: {
    textAlign: 'justify',
    fontWeight: 'bold',
    color: 'red'
  },
  // ButtonContainer: {
  //   position: 'absolute',
  //   left: 0,
  //   right: 0,
  //   top: 0,
  //   bottom: '10%',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   zIndex: '5',
  // }
});


