import { gql } from "apollo-server-lambda";

const booksTypeDefs = `
  # type book is defined
  type Book {
    id: String
    name: String
  }

  type Query {
    getAllBooks: [Book!]!
  }
`;

export { booksTypeDefs };
