const authTypeDefs = `#graphql
  # type definitions for authorization services
  type Token {
    token: String!
  }
  type Query {
    createToken(username: String!, password: String!): Token!
  }
`;

export { authTypeDefs };
