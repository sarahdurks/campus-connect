// import the gql tagged template function
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
      _id: ID!
      username: String
      email: String
    }
  type Auth {
      token: ID!
      user: User
  }

  type Message {
    _id: ID!
    conversationId: String!
    sender: String!
    text: String!
    createdAt: String
  }

  type Conversation {
    members: [ User ]
  }

  type Query {
    user(username: String!): User
    users: [User]
    # getMsgs: (sender: String): [Message]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;