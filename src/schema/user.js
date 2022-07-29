import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    user(id: ID!): User
    users: [User!]
    me: User
  }

  type User {
    id: ID!
    username: String!
    messages: [Message!]
  }
`;
