// local dependencies
import { createJWTToken } from "../helpers/jwtHelpers.js";

const resolvers = {
  Query: {
    createToken: (_, args, context) => {
      const { username, password } = args;
      if (username !== "admin" || password !== "admin123") {
        throw Error("Wrong username and password ");
      }
      const token = createJWTToken({ username, password });
      return { token: `Bearer ${token}` };
    },
  },
};

export { resolvers };
