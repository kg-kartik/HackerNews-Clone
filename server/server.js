const { ApolloServer } = require("apollo-server");
const fs = require("fs");
const path = require("path");

//Resolvers can be implemented for each field of the query
const resolvers = {
    Query: {
        title: () => `Hackernews clone`,
    },
};

const server = new ApolloServer({
    typeDefs: fs.readFileSync(path.join(__dirname, "scheme.graphql"), "utf-8"),
    resolvers,
});

server.listen().then(({ url }) => {
    console.log(`Server started on ${url}`);
});
