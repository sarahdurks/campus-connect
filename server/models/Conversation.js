const { Schema, model } = require('mongoose');

const conversationSchema = new Schema(
  {
    members: {
        type: Array,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    }
  },
  { timestamps: true }
);

const Conversation = model('Conversation', conversationSchema);

module.exports = Conversation;
