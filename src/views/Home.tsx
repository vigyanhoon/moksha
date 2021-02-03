import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Audio} from 'expo-av'
import {RootStackParamList} from '../../App';
import {Button} from 'react-native-paper';
var Sound = require('react-native-sound');

type NavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

interface Props {
  navigation: NavigationProp;
}

const Home = ({navigation}: Props): JSX.Element => {
  const [audio, setAudio] = useState();

  const play = async () => {
    var whoosh = new Sound('malini.mp3', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
      // loaded successfully
      console.log('duration in seconds: ' + whoosh.getDuration() + 'number of channels: ' + whoosh.getNumberOfChannels());

      // Play the sound with an onEnd callback
      whoosh.play((success) => {
        if (success) {
          console.log('successfully finished playing');
        } else {
          console.log('playback failed due to audio decoding errors');
        }
      });
    });
    setAudio(whoosh)
  }

  const stop = () => {
    audio.stop()
  }

  return (
    <>
      <View style={styles.body}>
        <Text>Hi</Text>
        <Button icon="play" mode="contained" onPress={play}>
          Play
        </Button>
        <Button icon="play" mode="contained" onPress={stop}>
          Stop
        </Button>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Home;
