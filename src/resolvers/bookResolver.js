// local dependencies
import { findBooksFromDB, addBookToDB } from "../dbRelated/booksDbOps.js";

const resolvers = {
  Query: {
    findBooks: () => {
      return findBooksFromDB();
    },
  },

  Mutation: {
    addBook: (_, args) => {
      return addBookToDB(args);
    },
  },
};
// console.log("fromm console", resolvers.Query.getAllBooks());
export { resolvers };
