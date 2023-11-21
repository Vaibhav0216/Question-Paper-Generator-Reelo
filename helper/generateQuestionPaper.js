

const generateQuestionPaper = (totalMarks, distribution) => {
    const questionPaper = [];
    const difficultyLevels = Object.keys(distribution);
  
    difficultyLevels.forEach(difficulty => {
      const requiredMarks = (distribution[difficulty] / 100) * totalMarks;
      let currentMarks = 0;
  
      // Filter questions based on difficulty
      const filteredQuestions = questionStore.filter(question => question.difficulty === difficulty);
  
      // Randomly select questions until required marks are reached
      while (currentMarks < requiredMarks && filteredQuestions.length > 0) {
        const randomIndex = Math.floor(Math.random() * filteredQuestions.length);
        const selectedQuestion = filteredQuestions.splice(randomIndex, 1)[0];
  
        questionPaper.push(selectedQuestion);
        currentMarks += selectedQuestion.marks;
      }
    });
  
    return questionPaper;
  }
  
  export default generateQuestionPaper;