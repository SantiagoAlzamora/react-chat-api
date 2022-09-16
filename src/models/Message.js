const { Schema, model } = require('mongoose')

const messageSchema = new Schema(
    {
        conversationId: {
            type: String,
        },
        sender: {
            type: String,
        },
        text: {
            type: String,
        },
    },
    {
        timestamps: true,
        versionKey: false
    }
)

module.exports = model("Message", messageSchema);