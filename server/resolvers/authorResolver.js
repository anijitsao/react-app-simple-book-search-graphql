// local dependencies
import {
  findAuthorsFromDB,
  addAuthorToDB,
  deleteAuthorFromDB,
  updateAuthorToDB,
} from "../dbRelated/AuthorsDbOps.js";

import { verifyJWTToken } from "../helpers/jwtHelpers.js";

const resolvers = {
  Query: {
    findAuthors: (parent, args, { event }) => {
      verifyJWTToken(event);
      return findAuthorsFromDB();
    },
  },

  Mutation: {
    addAuthor: (_, args, { event }) => {
      verifyJWTToken(event);
      return addAuthorToDB(args, { event });
    },
    deleteAuthor: (_, args, { event }) => {
      verifyJWTToken(event);
      return deleteAuthorFromDB(args);
    },
    updateAuthor: (_, args, { event }) => {
      verifyJWTToken(event);
      return updateAuthorToDB(args);
    },
  },
};
export { resolvers };
