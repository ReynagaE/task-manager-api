import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
    filename: {
        type: String
    },
    path: {
        type: String
    },
    originalname: {
        type: String
    },
    mimetype: {
        type: String
    },
    size: {
        type: Number
    }
});

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    img: imageSchema,
    tags: {
        type: [String]
    },
    list: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'List',
        required: true
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
      }
}, {
    timestamps: true
});

export default mongoose.model('Task', taskSchema);