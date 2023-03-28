const booksTypeDefs = `#graphql
  # type book is defined
  type Book {
    _id: ID!
    name: String!
    published: Int
  }

  type Query {
    findBooks: [Book]
  }

  input UpdataBookParams {
    name: String!
    published: Int
  }

  # All the Mutations on Book listed here
  type Mutation {
    addBook(name: String!): Book!
    deleteBook(_id: ID!): Int!
    updateBook(_id: ID!, updateBookData: UpdataBookParams!): Int!
  }
`;

export { booksTypeDefs };
