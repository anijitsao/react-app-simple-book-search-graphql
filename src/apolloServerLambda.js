import { ApolloServer, gql } from "apollo-server-lambda";
import { resolvers } from "../resolvers/index.js";
import { typeDefs } from "../typedefs/typedef.js";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const handler = server.createHandler();
export { handler };
