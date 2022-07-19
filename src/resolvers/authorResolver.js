// local dependencies
import {
    findAuthorsFromDB,
    addAuthorToDB,
    deleteAuthorFromDB,
    updateAuthorToDB,
  } from "../dbRelated/AuthorsDbOps.js";
  
  const resolvers = {
    Query: {
      findAuthors: () => {
        return findAuthorsFromDB();
      },
    },
  
    Mutation: {
      addAuthor: (_, args) => {
        return addAuthorToDB(args);
      },
      deleteAuthor: (_, args) => {
        return deleteAuthorFromDB(args);
      },
      updateAuthor: (_, args) => {
        return updateAuthorToDB(args);
      },
    },
  };
  export { resolvers };
  