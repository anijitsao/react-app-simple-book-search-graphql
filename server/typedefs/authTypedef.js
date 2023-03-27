import { gql } from "apollo-server-lambda";

const authTypeDefs = gql`
  # type definitions for authorization services
  type Token {
    token: String!
  }
  type Query {
    createToken(username: String!, password: String!): Token!
  }
`;

export { authTypeDefs };
