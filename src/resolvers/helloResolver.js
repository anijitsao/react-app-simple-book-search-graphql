import { verifyJWTToken } from "../helpers/jwtHelpers.js";

const resolvers = {
  Query: {
    hello: (_, args, { event }) => {
      verifyJWTToken(event);
      return "Hello World from Hello Resolvers";
    },
  },
  Mutation: {
    getCount: (_, args, { event }) => {
      verifyJWTToken(event);
      return args.count + 1;
    },
  },
};

export { resolvers };
