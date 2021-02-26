import Sound from 'react-native-sound';

let audio: Sound;
let interval: NodeJS.Timeout;

const play = (start: number, end: number): void => {
  audio = new Sound('vishnu_sahasranamam.mp3', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }

    interval = setInterval(function () {
      audio.setCurrentTime(start);
    }, (end - start) * 1000);

    audio.setCurrentTime(start);
    audio.play((success: any) => {
      if (success) {
        console.log('successfully finished playing');
      } else {
        console.log('playback failed due to audio decoding errors');
      }
    });
  });
};

const stop = (): void => {
  clearInterval(interval);
  if (audio) audio.stop();
};

export { play, stop };
