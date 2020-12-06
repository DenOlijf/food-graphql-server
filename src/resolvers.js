const data = require('./data');

// Resolvers define the technique for fetching the types in the
// schema.
const resolvers = {
    Query: {
        stores: () => data.getStores(),
      }
};

module.exports = resolvers
