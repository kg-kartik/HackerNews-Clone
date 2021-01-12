//Resolvers can be implemented for each field of the query
//Also connecting the server to the database
//As we query and post mutation to the db
module.exports.resolvers = {
    Query: {
        title: () => {
            "This is the API of a hackernews clone ";
        },
        feed: () => async (parent, args, context) => {
            console.log(context.prisma.link, "context");
            const data = await context.prisma.link.findMany();
            console.log(data);
            return data;
        },
    },
    Mutation: {
        post: (parent, args, context, info) => {
            const newLink = context.prisma.link.create({
                //Adding newLink to the database
                data: {
                    url: args.url,
                    description: args.description,
                },
            });
            return newLink;
        },
    },
};
