import Axios from "axios";
import { Character } from "./models";

const URL = `https://rickandmortyapi.com/api/character`;

export const getCharacters = async (): Promise<Character[]> => {
  const { data } = await Axios.get(URL);
  return data.results || [];
}

export const getCharacter = async (id: string): Promise<Character> => {
  const { data } = await Axios.get(`${URL}/${id}`);
  return data || null;
}
