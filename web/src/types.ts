export type MantraType = {
  mantra: string;
  english: string;
  time: number;
  endTime?: number;
  meaning: string;
};

export type  MantraProps = {
  currentPlaying: number;
  index: number;
  text: MantraType;
  play: (m: MantraType) => void;
  isEnglish: boolean;
}

export type PlayerProps = {
    currentPlaying: number,
    play: (m?: MantraType) => void
    stop: () => void
    playing: boolean
    looping: boolean
    setLooping: (b: boolean) => void
    isEnglish: boolean,
    setIsEnglish: (b: boolean) => void
}