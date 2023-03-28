import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { resolvers } from "../resolvers/index.js";
import { typeDefs } from "../typedefs/index.js";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: "bounded",
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
  context: async ({ req }) => {
    // send the http req as event to match JWT methods
    return { event: req };
  },
});

console.log(`Server ready at: ${url}`);
