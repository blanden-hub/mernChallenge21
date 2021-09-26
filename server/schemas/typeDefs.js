const { gql } = require("apollo-server-express");

const typeDefs = gql`
type Query {
    brysonTiller: String
}`;

module.exports = typeDefs;