
import Question from '../models/question.js';

const createQuestion = async (req, res) => {
  const { question, subject, topic, difficulty, marks } = req.body;
  try {
    const newQuestion = new Question({
      question,
      subject,
      topic,
      difficulty,
      marks,
    });
    await newQuestion.save();
    res.status(200).json(newQuestion);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

export default createQuestion;