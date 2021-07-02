import gql from 'graphql-tag';

export const LOGIN_USER = gql`
 query login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      username
      email
      createdAt
      token
    }
  }
`;

// I had to change the login-user to get the login page to work. 
// export const LOGIN_USER = gql`
//   query login($email: String!, $password: String!) {
//     login(email: $email, password: $password) {
//       token
//       username
//       _id
//     }
//   }
// `;

export const GET_USERS = gql`
query getUsers {
  getUsers {
    username
    email
    imageUrl
    createdAt
    latestMessage {
      _id
      from
      to
      msg
      createdAt
    }
  }
}
`
export const GET_MESSAGES = gql`
query getMsgs($from: String!) {
  getMsgs(from: $from) {
    _id
    from
    to
    msg
    createdAt
    reactions {
      _id
      content
    }
  }
}
`