import { CharacterEntityApi } from './character-collection.api-model';
import Axios from 'axios';

const URL = `https://rickandmortyapi.com/api/character`;

export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> => {
  const { data } = await Axios.get(URL);
  return data.results || [];
};

