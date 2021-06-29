const { AuthenticationError } = require('apollo-server-express');
const { User, Message, Conversation } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    // find one user whose email matches the req
    user: async (_parent, { email }) => {
      return User.findOne({ email })
        .select('-__v -password')
    },
    // get all users
    users: async (_parent, _args, context) => {
      // check if the user is logged in
      if (context.user) {
        const allUsers = await User.find();
        return allUsers;
      }
      throw new AuthenticationError('Not logged in');
    },

    // Receive Messages sent to you
    // getMsgs: async (_parent, { from }, context) => {
    //   // check if the user is logged in
    //   if (context.user) {
    //     // check if sender is in the database
    //     const sender = await User.findOne({ username: from });
    //     if (!sender) throw new UserInputError('User not found');

    //     // Get messages that are sent to the user and sort it by createdAt
    //     const msgToGet = await Message.find({
    //       to: context.user.username
    //     }).sort({ createdAt: -1 });

    //     return msgToGet;
    //   }
    //   throw new AuthenticationError('Not logged in');
    // }
  },
  Mutation: {
    addUser: async (_parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (_parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect Username');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect Password');
      }

      const token = signToken(user);
      return { token, user };
    },
// how to get other person req.body.senderId vs req.body.receiverId 
    newConversation: async(parent, args, context) => {
      if (context.user) {
        const conversation = await Conversation.create({ ...args, members: [context.user._id, receiverId] });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { conversations: conversation._id } },
          { new: true }
      );

      return conversation;
      }
    } 
  },
};

module.exports = resolvers;