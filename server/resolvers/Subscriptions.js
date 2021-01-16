const newLinkSubscribe = (parent, args, context, info) => {
    return context.pubsub.asyncInterator("NEW_Link");
};

const newLink = {
    subscribe: newLinkSubscribe,
    resolve: (payload) => {
        return payload;
    },
};

module.exports = {
    newLink,
};
