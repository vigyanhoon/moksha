import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { MantraType, mantras } from '../Utils/VishnuSahsranama';
import { play, stop } from '../Utils/Player';
import { IconButton } from 'react-native-paper';
import Popup from './Popup';

const Home = (): JSX.Element => {
  const mantraPerPage = 7;
  const [page, setPage] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [meaning, setMeaning] = useState('');
  const [selectedIndex, setSelectedIndex] = useState<number>();

  const playOne = (index: number) => {
    stop();
    const mantraIndex = page * mantraPerPage + index;
    setSelectedIndex(mantraIndex);
    const start = mantras[mantraIndex].time;
    const end = mantras[mantraIndex + 1].time;
    play(start, end);
  };

  const playAll = () => {
    stop();
    const start = mantras[page * mantraPerPage].time;
    const end = mantras[(page + 1) * mantraPerPage].time;
    play(start, end);
  };

  const goPrevious = () => {
    if (page === 0) return;
    setPage(page - 1);
  };

  const goNext = () => {
    setPage(page + 1);
  };

  const showMeaning = (index: number) => {
    const mantraIndex = page * mantraPerPage + index;
    setSelectedIndex(mantraIndex);
    setMeaning(mantras[mantraIndex].meaning);
    setShowPopup(true);
  };

  const Mantra = ({ text, index }: { text: string; index: number }) => {
    console.log(index);
    const mantra = text.split('। ').join('।\n');
    return (
      <Text
        style={[
          styles.text,
          {
            color:
              page * mantraPerPage + index === selectedIndex
                ? 'red'
                : undefined,
          },
        ]}>
        {mantra}
      </Text>
    );
  };

  const MantraView = () => {
    const list: MantraType[] = mantras.slice(
      page * mantraPerPage,
      (page + 1) * mantraPerPage,
    );
    return (
      <View>
        {list.map((item, index) => {
          return (
            <TouchableOpacity
              style={styles.itemContainer}
              key={item.mantra}
              onLongPress={() => showMeaning(index)}
              onPress={() => playOne(index)}>
              <Mantra text={item.mantra} index={index} />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <>
      <Popup
        showPopup={showPopup}
        setShowPopup={setShowPopup}
        title={'Mantra ' + (selectedIndex && selectedIndex + 1)}
        text={meaning}
      />
      <View style={styles.body}>
        <Text style={styles.pageNo}>{page + 1}</Text>
        <Text style={styles.mantraNo}>
          {selectedIndex && selectedIndex + 1}
        </Text>
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
  mantraNo: {
    position: 'absolute',
    right: 20,
    top: 20,
    fontSize: 30,
    fontWeight: 'bold',
  },
  player: {
    flexDirection: 'row',
    position: 'absolute',
    top: 20,
  },
  itemContainer: {
    marginVertical: 15,
    flexDirection: 'row',
  },
  text: {
    fontSize: Dimensions.get('window').width * 0.05,
  },
  controller: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 20,
    width: Dimensions.get('window').width,
    justifyContent: 'space-between',
  },
});

export default Home;
