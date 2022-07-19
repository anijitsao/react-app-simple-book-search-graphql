const resolvers = {
  Query: {
    hello: () => "Hello World from Hello Resolvers",
  },
  Mutation: {
    getCount: (parent, arg) => {
      return arg.count + 1;
    },
  },
};

export { resolvers };
