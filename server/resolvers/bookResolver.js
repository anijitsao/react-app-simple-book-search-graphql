// local dependencies
import {
  findBooksFromDB,
  addBookToDB,
  deleteBookFromDB,
  updateBookToDB,
} from "../dbRelated/booksDbOps.js";
import { verifyJWTToken } from "../helpers/jwtHelpers.js";

const resolvers = {
  Query: {
    findBooks: (_, args, { event }) => {
      verifyJWTToken(event);
      return findBooksFromDB();
    },
  },

  Mutation: {
    addBook: (_, args, { event }) => {
      verifyJWTToken(event);
      return addBookToDB(args);
    },
    deleteBook: (_, args, { event }) => {
      verifyJWTToken(event);
      return deleteBookFromDB(args);
    },
    updateBook: (_, args, { event }) => {
      verifyJWTToken(event);
      return updateBookToDB(args);
    },
  },
};
export { resolvers };
