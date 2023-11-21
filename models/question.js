import mongoose from "mongoose";
const Schema = mongoose.Schema;

const questionSchema = new Schema({
    question: String,
    subject: String,
    topic: String,
    difficulty: String,
    marks: Number,
});

const Question = mongoose.model('Question', questionSchema);

export default Question;
