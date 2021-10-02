import Axios from 'axios';
import { Character } from './character.api-model';
import { Lookup } from 'common/models';

const URL = '/api/characters';

export const getCharacter = async (id: string): Promise<Character> => {
  const { data } = await Axios.get(`${URL}/${id}`);
  return data || null;
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  return true;
};
