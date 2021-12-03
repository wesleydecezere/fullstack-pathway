import mongoose from "mongoose"

const Schema = new mongoose.Schema({
    title: {
        type: String,
        requried: true
    },
    content: {
        type: String,
        requried: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        requried: true
    }
})

export default mongoose.model('Post', Schema)