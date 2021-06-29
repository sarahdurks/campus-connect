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
            type: String,
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
        }
    },
    { timestamps: true }
);

const Message = model('Message', messageSchema);

module.exports = Message;
