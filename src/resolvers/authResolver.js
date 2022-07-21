const resolvers = {
  Query: {
    createToken: (_, args, context) => {
      console.log("code reached");
    },
  },
};

export { resolvers };
