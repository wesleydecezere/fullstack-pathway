import mongoose from "mongoose"

const Schema = new mongoose.Schema({
    firstName: {
        type: String,
        requried: true
    },
    lastName: {
        type: String,
        requried: true
    },
    email: String,    
    active: {
        type: Boolean,
        requried: true
    }
})

export default mongoose.model('User', Schema)