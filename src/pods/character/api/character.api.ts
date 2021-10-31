import { gql } from 'graphql-request';
import { graphQLClient } from 'core/api';
import { Character } from './character.api-model';

interface GetCharacterResponse {
  character: Character;
}

export const getCharacter = async (id: string): Promise<Character> => {
  const query = gql`
    query {
      character(id: "${id}") {
        id
        name
        status
        gender
        species
        image
        location {
          name
        }
      }
    }
  `;
  const { character } = await graphQLClient.request<GetCharacterResponse>(query);
  return character;
};
