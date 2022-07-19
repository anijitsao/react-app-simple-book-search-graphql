import { gql } from "apollo-server-lambda";

const booksTypeDefs = gql`
  # type book is defined
  type Book {
    _id: ID!
    name: String!
    published: Int
  }

  type Query {
    findBooks: [Book]
  }

  # All the Mutations on Book listed here
  type Mutation {
    addBook(name: String!): ID
  }
`;

export { booksTypeDefs };
