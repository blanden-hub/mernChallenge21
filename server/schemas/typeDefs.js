const { gql } = require("apollo-server-express");

const typeDefs = gql`
type User {
    _id: ID!
    username: String!
    email: String
    bookCount: Int
    savedBooks: [Book]
  }
  type Book {
    _id: ID  
    authors: String
    bookId: ID!
    authors: [String]
    description: String
    image: String
    link: String
    title: String
  }
  type Query {
    users: User
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(content: bookData!): User
    removeBook(bookId: String!): User
  }
  type Auth {
    token: ID!
    user: User! 
}
input bookData {
  bookId: ID!
  authors: [String]!
  description: String
  title: String
  image: String
  link: String
}
`;

module.exports = typeDefs;