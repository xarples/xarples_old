import { gql } from 'apollo-server'

export default gql`
  extend type Query {
    user(id: ID, username: String, email: String): User
    users: [User]!
  }
  
  extend type Mutation {
    createUser(user: UserInputCreate!): User
    updateUser(user: UserInputUpdate!): User
  }

  type User {
    id: ID!
    firstName: String!
    lastName: String
    email: String!
    username: String!
    password: String!
    createdAt: String
    updatedAt: String
  }
  
  input UserInputCreate {
    firstName: String!
    lastName: String!
    email: String!
    username: String!
    password: String!
  }

  input UserInputUpdate {
    firstName: String
    lastName: String
    email: String
    username: String
    password: String
  }

`