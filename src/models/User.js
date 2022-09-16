const { Schema, model } = require('mongoose')

const userSchema = new Schema(
    {
        username: { type: String, required: true },
        email: { type: String, unique: true, required: true },
        password: { type: String, required: true },
        image: { type: String }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

module.exports = model("User", userSchema);