const { gql } = require('apollo-server');

// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.


module.exports = gql`
  type Query {
    stores: [Store]
  }

  type Store {
      id: String
      name: String
  }
`;