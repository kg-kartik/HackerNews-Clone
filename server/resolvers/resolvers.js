//Resolvers can be implemented for each field of the query
//Also connecting the server to the database
//As we query and post mutation to the db
module.exports.resolvers = {
    Query: {
        title: () => {
            "This is the API of a hackernews clone ";
        },
        feed: () => async (parent, args, context) => {
            const data = await context.prisma.link.find();
            return data;
        },
    },
    Mutation: {
        post: async (parent, args, context, info) => {
            const newLink = await context.prisma.link.create({
                //Adding newLink to the database
                data: {
                    url: args.url,
                    description: args.description,
                },
            });

            context.pubSub.publish("NEW_LINK", newLink);
            return newLink;
        },
    },
};
