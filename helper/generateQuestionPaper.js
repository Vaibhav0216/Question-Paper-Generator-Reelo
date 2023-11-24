
import getAllQuestions from "./allQuestion.js";

const generateQuestionPaper = async (totalMarks, distribution) => {
  try {
    const questionPaper = [];

    const difficultyLevels = {};

    for (const level of Object.keys(distribution)) {
      let value;

      // Assign specific values based on difficulty level
      switch (level) {
        case "Easy":
          value = 5;
          break;
        case "Medium":
          value = 10;
          break;
        case "Hard":
          value = 15;
          break;
        // Add more cases as needed

        default:
          throw new Error(`Unknown difficulty level: ${level}`);
      }

      difficultyLevels[level] = {
        label: level,
        value: value,
      };
    }
    let questionStore = await getAllQuestions();

    const questionsByDifficulty = {}; // Store questions by difficulty

    Object.keys(difficultyLevels).forEach((difficulty) => {
      questionsByDifficulty[difficulty] = questionStore.filter(
        (question) => question.difficulty === difficulty
      );
    });

    Object.keys(difficultyLevels).forEach((difficulty) => {
      const requiredMarks = (distribution[difficulty] / 100) * totalMarks;
      const requiredQuestions =
        requiredMarks / difficultyLevels[difficulty].value;
      if (Number.isInteger(requiredQuestions)) {
        let currentMarks = 0;

        while (currentMarks < requiredMarks) {
          const randomIndex = Math.floor(
            Math.random() * questionsByDifficulty[difficulty].length
          );
          const selectedQuestion = questionsByDifficulty[difficulty].splice(
            randomIndex,
            1
          )[0];

          questionPaper.push(selectedQuestion);
          currentMarks += selectedQuestion.marks;
        }
      } else {
        throw new Error(
          `Invalid distribution for difficulty ${difficulty}. It should be a multiple of ${difficultyLevels[difficulty].value}.`
        );
      }
    });

    console.log("questionPaper ", questionPaper);
    return questionPaper;
  } catch (error) {
    console.error("Error:", error.message);
    // Handle the error in a way that makes sense for your application
    // You might log the error, send it to a monitoring service, or respond to the client with an error message.
    return null; // or some default value indicating an error
  }
};

export default generateQuestionPaper;
