const { Schema, model } = require('mongoose');
// const messageSchema = require('./Message');

const conversationSchema = new Schema(
  {
    members: {
        type: Array,
    },

    createdAt: {
      type: Date,
      default: Date.now,
    },
    // messages: [ messageSchema ]
  },
  {
    toJSON: {
      getters: true
    }
  },
  { timestamps: true }
);

const Conversation = model('Conversation', conversationSchema);

module.exports = Conversation;
