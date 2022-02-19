const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');


const replyShcmea = new Schema(
    {
        replyBody:{
            type:String
        },
        writtenBy: {
            type:String
        },
        createdAt: {
            type: Date,
            dafault:Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        }
    }
)

const CommentSchema = new Schema ({
    wrritenBy:{
        type:String
    },
        commentBy:{
            type:String
        },
        createdAt: {
            type: Date,
            default: Date.now
          }
})

const Comment = model('Comment', CommentSchema)

module.exports = Comment;