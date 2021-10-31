import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Query {
    # Get all characters
    characters: [Character!]!

    # Get a character by id
    character(id: ID!): Character!
  }

  type Character {
    id: Float!
    name: String!
    status: String!
    species: String!
    gender: String!
    image: String!
    location: Location
  }

  type Location {
    name: String!
    url: String!
  }
`;
