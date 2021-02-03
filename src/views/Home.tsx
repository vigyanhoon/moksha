import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { RootStackParamList } from '../../App';
import { Button } from 'react-native-paper';

type NavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

interface Props {
  navigation: NavigationProp;
}

const Home = ({ navigation }: Props): JSX.Element => {
  return (
    <>
      <View style={styles.body}>
        <Text>Hi</Text>
        <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
          Press me
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
