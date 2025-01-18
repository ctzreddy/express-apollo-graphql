import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './src/schema/schema.js';
import { resolvers } from './src/resolver/resolver.js'
import SampleAPI from './src/dataSources/sample-api.js';

const port = 4000;
// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const { url } = await startStandaloneServer(server, {
    context: async () => {
      const { cache } = server;
      return {
        dataSources: {
          moviesAPI: new SampleAPI({ cache }),
        },
      };
    },
    listen: { port: port },
  });
  
console.log(`🚀 Server listening at: ${url}`);
