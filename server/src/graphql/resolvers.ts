import {
  Character,
  getCharacter,
  getCharacters
} from '../db';

export const resolvers = {
  Query: {
    characters: async (): Promise<Character[]> => {
      const characters = await getCharacters();
      return characters;
    },
    character: async (_, args): Promise<Character> => {
      const character = await getCharacter(args.id);
      return character;
    }
  },
};
