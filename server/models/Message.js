const { Schema, model } = require('mongoose');

const messageSchema = new Schema(
  {
    conversationId: {
        type: String,
        required: true
    },
    sender: {
        type: String,
        required: true
    },
    text: {
        type: String
    }
  },
  { timestamps: true }
);

const Message = model('Message', messageSchema);

module.exports = Message;
