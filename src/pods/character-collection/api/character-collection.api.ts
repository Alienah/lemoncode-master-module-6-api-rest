import { CharacterEntityApi } from './character-collection.api-model';
import Axios from 'axios';

const URL = '/api/characters';

export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> => {
  const { data } = await Axios.get(URL);
  return data || [];
};

