import { ApolloServer, gql } from "apollo-server-lambda";
import { resolvers } from "../resolvers/index.js";
import { typeDefs } from "../typedefs/index.js";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: "bounded",
});

const graphqlHandler = server.createHandler();
export { graphqlHandler };
