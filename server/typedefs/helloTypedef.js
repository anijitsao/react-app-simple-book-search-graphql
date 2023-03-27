const helloTypeDefs = `#graphql
  type Query {
    hello: String!
  }

  type Mutation {
    getCount(count: Int!): Int!
  }
`;

export { helloTypeDefs };
