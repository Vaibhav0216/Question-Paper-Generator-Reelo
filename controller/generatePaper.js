
import generateQuestionPaper from '../helper/generateQuestionPaper.js';

const generatePaper=async(req, res) => {
  const { totalMarks, distribution } = req.body;

  if (!totalMarks || !distribution) {
    return res.status(400).json({ error: 'Bad Request. Please provide totalMarks and distribution in the request body.' });
  }

  const questionPaper = await generateQuestionPaper(totalMarks, distribution);
  
  if(!questionPaper) return res.status(400).json({ error: 'Bad Request. Please provide valid distribution in the request body.' });
  
  res.status(200).json({ questionPaper });
} 

export default generatePaper;


