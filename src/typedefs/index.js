import { gql } from "apollo-server-lambda";

import { booksTypeDefs } from "./bookTypedef.js";
import { helloTypeDefs } from "./helloTypedef.js";

const typeDefs = gql`
  ${booksTypeDefs}
  ${helloTypeDefs}
`;

export { typeDefs };
