
import generateQuestionPaper from '../helper/generateQuestionPaper.js';

const generatePaper=async(req, res) => {
  const { totalMarks, distribution } = req.body;

  if (!totalMarks || !distribution) {
    return res.status(400).json({ error: 'Bad Request. Please provide totalMarks and distribution in the request body.' });
  }
  if (totalMarks < 5 || totalMarks > 300 || totalMarks % 5 !== 0) {
    return res.status(400).json({ error: 'Bad Request. totalMarks should be a multiple of 5 between 5 and 300.' });
  }

  const questionPaper = await generateQuestionPaper(totalMarks, distribution);
  
  if(!questionPaper) return res.status(400).json({ error: 'Bad Request. Please provide valid distribution and total marks in the request body.' });
  
  res.status(200).json({ questionPaper });
} 

export default generatePaper;


