// import the gql tagged template function
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
      _id: ID!
      username: String
      email: String
      conversations: [Conversation]
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
    conversations(username: String): [Conversation]
    conversation(_id: ID!): Conversation
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    newConversation(receiverId: ID!): User
    newMessage(conversationId: String!, sender: String!, text: String!) : User
  }
`;

module.exports = typeDefs;