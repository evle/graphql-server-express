const channels = [
    {
        id: 1,
        name: 'soccer',
    },
    {
        id: 2,
        name: 'baseball',
    }
];

let nextId = 3;

export const resolvers = {
    Query: {
        channels: () => {
            return channels;
        },
        channel:(root, { id }) => {
            return channels.find(channel => channel.id == id);
        },
    },
    Mutation: {
        addChannel: (root, args) => {
            const newChannel = { id: nextId++, name: args.name };
            channels.push(newChannel);
            return newChannel;
        },
        delChannel: (root, args) => {
            // return channels.d(channel => channel.id === args.id);
            channels.forEach((channel, i) => {
                if(channel.id === args.id){
                    channels.splice(i, 1);
                }
            })
        },
        updateChannel: (root, args) => {
            channels.forEach((channel, i) => {
                if(channel.id == args.id){
                    channel.name = args.name
                }
            })
        }
    }
};