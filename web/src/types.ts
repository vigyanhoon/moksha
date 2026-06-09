export type MantraType = {
  mantra: string;
  english: string;
  time: number;
  endTime?: number;
  meaning: string;
};

export type MantraPageDetails = {
  mp3: string;
  texts: MantraType[];
}