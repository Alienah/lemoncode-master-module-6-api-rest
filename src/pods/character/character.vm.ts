export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  location: string;
  image: string;
}

export const createEmptyCharacter = (): Character => ({
  id: 0,
  name: '',
  status: '',
  species: '',
  gender: '',
  location: '',
  image: ''
});
