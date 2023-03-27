import { gql } from "apollo-server-lambda";

const helloTypeDefs = gql`
  type Query {
    hello: String!
  }

  type Mutation {
    getCount(count: Int!): Int!
  }
`;

export { helloTypeDefs };
