import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import {
  ApolloServerPluginLandingPageGraphQLPlayground,
  ApolloServerPluginLandingPageDisabled,
} from 'apollo-server-core';
import { typeDefs, resolvers } from './graphql';

const PORT = 3000;
(async function () {
  const app = express();
  app.use(express.json());

  const graphqlServer = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [
      process.env.NODE_ENV === 'production'
        ? ApolloServerPluginLandingPageDisabled()
        : ApolloServerPluginLandingPageGraphQLPlayground(),
    ],
  });
  await graphqlServer.start();
  graphqlServer.applyMiddleware({ app });

  app.listen(PORT, () => {
    console.log(
      `GraphQL server ready at http://localhost:${PORT}${graphqlServer.graphqlPath}`
    );
  });
})();
