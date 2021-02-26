import React, { useState } from 'react';
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
  const mantraPerPage = 7;
  const [page, setPage] = useState(0);

  const playOne = (index: number) => {
    stop();
    const start = timeStamps[page * mantraPerPage + index];
    const end = timeStamps[page * mantraPerPage + index + 1];
    play(start, end);
  };

  const playAll = () => {
    stop();
    const start = timeStamps[page * mantraPerPage];
    const end = timeStamps[(page + 1) * mantraPerPage];
    play(start, end);
  };

  const goPrevious = () => {
    if (page === 0) return;
    setPage(page - 1);
  };

  const goNext = () => {
    setPage(page + 1);
  };

  const MantraView = () => {
    const list: string[] = names.slice(
      page * mantraPerPage,
      (page + 1) * mantraPerPage,
    );
    return (
      <View>
        {list.map((item, index) => {
          return (
            <TouchableOpacity
              style={styles.itemContainer}
              key={item}
              onPress={() => playOne(index)}>
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
        <Text style={styles.pageNo}>{page + 1}</Text>
        <View style={styles.player}>
          <IconButton icon="stop" size={40} onPress={stop} />
          <IconButton icon="play" size={40} onPress={playAll} />
        </View>
        <MantraView />
        <View style={styles.controller}>
          <IconButton icon="chevron-left" size={40} onPress={goPrevious} />
          <IconButton icon="chevron-right" size={40} onPress={goNext} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#FFCC99',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pageNo: {
    position: 'absolute',
    left: 20,
    top: 20,
    fontSize: 30,
    fontWeight: 'bold',
  },
  player: {
    flexDirection: 'row',
    backgroundColor: 'red',
    position: 'absolute',
    top: 20,
  },
  itemContainer: {
    marginVertical: 15,
  },
  text: {
    fontSize: Dimensions.get('window').width * 0.05,
  },
  controller: {
    flexDirection: 'row',
    backgroundColor: 'red',
    position: 'absolute',
    bottom: 20,
  },
});

export default Home;
