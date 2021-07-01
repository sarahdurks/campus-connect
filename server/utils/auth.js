const jwt = require('jsonwebtoken');
const { PubSub } = require('apollo-server-express');
// require('dotenv').config();
const pubsub = new PubSub();

const secret = 'mysecretsshhhhh';
const expiration = '2h';

const authMiddleware = (context) => {

  let token
  if (context.req && context.req.headers.authorization) {
    token = context.req.headers.authorization.split('Bearer ')[1]
  } else if (context.connection && context.connection.context.Authorization) {
    token = context.connection.context.Authorization.split('Bearer ')[1]
  }

  if (token) {
    jwt.verify(token, secret, (_err, decodedToken) => {
      context.user = decodedToken;
      console.log(decodedToken);
    })
  }

  context.pubsub = pubsub

  return context
};

const authToken = ({ username, email, _id }) => {
  const payload = { username, email, _id };
  return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
}


module.exports = { authMiddleware, authToken }

// unable to add the secret key to .env!