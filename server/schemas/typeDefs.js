const { gql } = require("apollo-server-express");

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    savedBooks: [Book]
  }
  type Book {
    _id: ID  
    authors: String
    description: String
    image: String
    link: String
    title: String
  }
  type Query {
    users: [User]
    user(username:String!): User  
    books(username: String): [Book]
  }
`;

module.exports = typeDefs;