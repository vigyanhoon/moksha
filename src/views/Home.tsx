import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { names, timeStamps } from '../Utils/VishnuSahsranama';
import { play, stop } from '../Utils/Player';
import { IconButton } from 'react-native-paper';

const Home = (): JSX.Element => {
  const toggleAudio = (index: number) => {
    const start = timeStamps[index];
    const end = timeStamps[index + 1];
    stop();
    play(start, end);
  };

  const MantraView = () => {
    const list: string[] = names.slice(0, 8);
    return (
      <View>
        {list.map((item, index) => {
          return (
            <TouchableOpacity
              style={styles.itemContainer}
              key={item}
              onPress={() => toggleAudio(index)}>
              <Text style={styles.text}>{item}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <>
      <View style={styles.body}>
        <IconButton icon="stop" size={30} onPress={stop} />
        <MantraView />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#FFCC99',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    marginVertical: 15,
  },
  text: {
    fontSize: Dimensions.get('window').width * 0.05,
  },
});

export default Home;
