import { makeExecutableSchema } from 'graphql-tools';

import { resolvers } from './resolvers';

const typeDefs = `
    type Channel {
        id: ID!
        name: String
        messages: [Message]!
    }

    type Message{
        id: ID!
        text:String
    }

    # this type specifies the entry points into our API
    type Query{
        channels: [Channel]
        channel(id: ID!): Channel
    }
    
    # The mutation root type, used to define all mutations
    type Mutation {
        # A mutation to add a new channel to the list of channels
        addChannel(name: String!): Channel
        delChannel(id: ID!): Channel
        updateChannel(id: ID!, name: String!): Channel
        
    }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });
export { schema };