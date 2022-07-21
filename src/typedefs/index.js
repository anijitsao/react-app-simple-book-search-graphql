// local dependencies
import { booksTypeDefs } from "./bookTypedef.js";
import { helloTypeDefs } from "./helloTypedef.js";
import { authorsTypeDefs } from "./authorTypedef.js";
import { authTypeDefs } from "./authTypedef.js";

// merging all the type definitions in an array
const typeDefs = [booksTypeDefs, helloTypeDefs, authorsTypeDefs, authTypeDefs];

export { typeDefs };
