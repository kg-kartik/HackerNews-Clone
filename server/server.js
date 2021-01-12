const { ApolloServer } = require("apollo-server");
const fs = require("fs");
const path = require("path");
const { resolvers } = require("./resolvers");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const server = new ApolloServer({
    typeDefs: fs.readFileSync(path.join(__dirname, "scheme.graphql"), "utf-8"),
    resolvers,
    context: {
        prisma,
    },
});

server.listen().then(({ url }) => {
    console.log(`Server started on ${url}`);
});
