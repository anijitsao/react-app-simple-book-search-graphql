const authorsTypeDefs = `#graphql
  # type book is defined
  type Author {
    _id: ID!
    firstName: String!
    lastName: String
    country: String
  }

  type Query {
    findAuthors: [Author]
  }

  input UpdataAuthorParams {
    firstName: String!
    lastName: String
    country: String
  }

  # All the Mutations on Author listed here
  type Mutation {
    addAuthor(firstName: String!, lastName: String): Author!
    deleteAuthor(_id: ID!): Int!
    updateAuthor(_id: ID!, updateAuthorData: UpdataAuthorParams!): Int!
  }
`;

export { authorsTypeDefs };
