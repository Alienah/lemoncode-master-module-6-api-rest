import { CharacterEntityApi } from './character-collection.api-model';
import { mockCharacterCollection } from './character-collection.mock-data';
import Axios from 'axios';

let characterCollection = [...mockCharacterCollection];
const URL = `https://rickandmortyapi.com/api/character`;

export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> => {
  const { data } = await Axios.get(URL);
  console.log('data', data)
  return data.results || [];
};

