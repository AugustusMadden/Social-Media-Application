const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema(
    {
        reationId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (date) => {
                return date.toLocaleDateString('en-US')
            }
        },
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    },
);

module.exports = reactionSchema;