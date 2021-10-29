import {
  Character,
  getCharacters
} from '../db';

export const resolvers = {
  Query: {
    characters: async (): Promise<Character[]> => {
      const characters = await getCharacters();
      return characters;
    }
  },
};
