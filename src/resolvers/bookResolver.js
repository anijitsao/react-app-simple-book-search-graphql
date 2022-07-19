// local dependencies
import {
  findBooksFromDB,
  addBookToDB,
  deleteBookFromDB,
  updateBookToDB,
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
    updateBook: (_, args) => {
      return updateBookToDB(args);
    },
  },
};
export { resolvers };
