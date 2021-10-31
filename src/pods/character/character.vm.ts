export interface Character {
  id: number;
  name: string;
  bestSentences: string[],
  status: string;
  species: string;
  gender: string;
  location: {
    locationName: string;
    locationUrl: string;
  },
  image: string;
}

export const createEmptyCharacter = (): Character => ({
  id: 0,
  name: '',
  bestSentences: [],
  status: '',
  species: '',
  gender: '',
  location: null,
  image: ''
});
