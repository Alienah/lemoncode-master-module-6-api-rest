import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Query {
    characters: [Character!]!
  }

  type Character {
    id: Float!
    name: String!
    status: String!
    species: String!
    gender: String!
    image: String!
  }
`;
