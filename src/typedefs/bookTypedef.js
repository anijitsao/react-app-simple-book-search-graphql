import { gql } from "apollo-server-lambda";

const booksTypeDefs = gql`
  # type book is defined
  type Book {
    id: ID!
    name: String!
  }

  type Query {
    getAllBooks: [Book!]!
    findBooks: [Book]
  }
`;

export { booksTypeDefs };
