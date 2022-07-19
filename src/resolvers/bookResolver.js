// local dependencies
import { findBooksFromDB } from "../dbRelated/booksDbOps.js";

const resolvers = {
  Query: {
    findBooks: () => {
      return findBooksFromDB();
    },
  },

  Mutation: {
    getCount: (parent, arg) => {
      // console.log("arg is", arg);
      return arg.count + 1;
    },
  },
};
// console.log("fromm console", resolvers.Query.getAllBooks());
export { resolvers };
