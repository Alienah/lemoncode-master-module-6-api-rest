import { gql } from 'graphql-request';
import { graphQLClient } from 'core/api';
import { CharacterEntityApi } from './character-collection.api-model';

interface GetCharacterCollectionResponse {
  characters: CharacterEntityApi[];
}

export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> => {
  const query = gql`
    query {
      characters {
        id
        name
        status
        species
        gender
        image
      }
    }
  `;
  const { characters } = await graphQLClient.request<GetCharacterCollectionResponse>(query);
  return characters;
};

