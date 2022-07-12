import { config } from "dotenv"
import { ApolloServer, gql } from "apollo-server"
import { resolvers } from "./resolvers/index.js"
import { typeDefs } from "./typedefs/typedef.js"

config()
const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true
})

server.listen({ port: process.env.PORT }).then((data) => {
    console.log("Server is running", data.url)
})
