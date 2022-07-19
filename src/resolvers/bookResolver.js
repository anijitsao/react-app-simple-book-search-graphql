// local dependencies
import {
  findBooksFromDB,
  addBookToDB,
  deleteBookFromDB,
} from "../dbRelated/booksDbOps.js";

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
    deleteBook: (_, args) => {
      return deleteBookFromDB(args);
    },
  },
};
export { resolvers };
