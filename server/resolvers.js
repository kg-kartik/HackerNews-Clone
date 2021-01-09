//Resolvers can be implemented for each field of the query
let links = [
    {
        id: "link-0",
        url: "https://kg-kartik.github.io",
        description: "Portfolio",
    },
];

let idCount = links.length;

module.exports.resolvers = {
    Query: {
        title: () => {
            "This is the API of a hackernews clone ";
        },
        feed: () => links,
    },
    Mutation: {
        post: (parent, args) => {
            const link = {
                id: `link-${idCount++}`,
                description: args.description,
                url: args.url,
            };
            links.push(link);
            return link;
        },
    },
};
