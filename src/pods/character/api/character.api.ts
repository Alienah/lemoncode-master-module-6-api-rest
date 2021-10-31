import Axios from 'axios';
import { Character } from './character.api-model';

const URL = '/api/characters';

export const getCharacter = async (id: string): Promise<Character> => {
  const { data } = await Axios.get(`${URL}/${id}`);
  return data || null;
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  if (character.id) {
    await Axios.put<Character>(`${URL}/${character.id}`, character);
  } else {
    await Axios.post<Character>(URL, character);
  }
  return true;
};
