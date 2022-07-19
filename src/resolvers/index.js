import { resolvers as helloResolvers } from "./helloResolver.js"
import { resolvers as bookResolvers } from "./bookResolver.js"

const resolvers = {
    Query: {
        ...bookResolvers.Query,
        ...helloResolvers.Query
    },
    Mutation: {
        ...bookResolvers.Mutation
    }
}

export { resolvers }