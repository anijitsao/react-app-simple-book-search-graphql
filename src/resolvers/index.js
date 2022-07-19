import { resolvers as helloResolvers } from "./helloResolver.js";
import { resolvers as bookResolvers } from "./bookResolver.js";
import { resolvers as authorResolvers } from "./authorResolver.js";

const resolvers = {
  Query: {
    ...bookResolvers.Query,
    ...helloResolvers.Query,
    ...authorResolvers.Query,
  },
  Mutation: {
    ...bookResolvers.Mutation,
    ...helloResolvers.Mutation,
    ...authorResolvers.Mutation,
  },
};

export { resolvers };
