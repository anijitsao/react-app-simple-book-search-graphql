// require a JSON file in Node JS in ES style dont forget
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const allBooks = require("../data/books.json");

// console.log("allBooks", allBooks, " uri", import.meta.url);

import { findBooksFromDB } from "../dbRelated/booksDbOps.js";

const resolvers = {
  Query: {
    getAllBooks: () => {
      return allBooks;
    },

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
