import Axios from 'axios';
import { Character } from './character.api-model';

const URL = `https://rickandmortyapi.com/api/character`;

export const getCharacter = async (id: string): Promise<Character> => {
  const { data } = await Axios.get(`${URL}/${id}`);
  return data || null;
};

