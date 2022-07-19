import { gql } from "apollo-server-lambda";

const booksTypeDefs = gql`
  # type book is defined
  type Book {
    id: String
    name: String
  }

  type Query {
    hello: String
    getAllBooks: [Book!]!
  }

  type Mutation {
    getCount(count: Int): Int
  }
`;

export { booksTypeDefs };
