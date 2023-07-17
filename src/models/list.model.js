import mongoose from "mongoose";

const listSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    tasks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task'
    }],
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
      }
}, {
    timestamps: true
});

export default mongoose.model('List', listSchema);