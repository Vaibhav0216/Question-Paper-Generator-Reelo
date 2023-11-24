# [Question Paper Generator](https://question-paper-generator-reelo-frontend.vercel.app/)
- [client](https://question-paper-generator-reelo-frontend.vercel.app/)  

- [server](https://question-paper-vaibhav.onrender.com/)

## Overview

Welcome to the Question Paper Generator, a Node.js application designed to create question papers based on specified criteria. This repository contains the code for the application, allowing you to generate question papers with ease. Questions are stored on a MongoDB server.

## Features

- **Modular and Extensible:** The code is designed to be modular and extensible, following best practices and community conventions. Easily scale the application with new requirements.

- **MongoDB Integration:** Questions are now stored on a MongoDB server. The application connects to the database to fetch questions for paper generation.

- **Criteria Configuration:** Define questions in the MongoDB database and adjust criteria for generating question papers in the `questionPaperGenerator.js` file.

- **Example Usage:** The README provides clear examples of setting up the application, connecting to MongoDB, defining questions, and generating question papers.

- **Controllers:**
  - `createQuestion.js`: Controller for creating and storing questions.
  - `generatePaper.js`: Controller for generating question papers.

- **Helpers:**
  - `allQuestion.js`: Helper function for fetching all questions from the question store.
  - `generateQuestionPaper.js`: Helper function for generating a question paper based on specified criteria.

- **Models:**
  - `question.js`: Model representing the structure of a question with attributes like question, subject, topic, difficulty, and marks.

- **Node Modules:** External packages and dependencies installed using npm.

- **Routes:**
  - `allQuestions.routes.js`: Routes for fetching all questions.
  - `createQuestion.routes.js`: Routes for creating and storing questions.
  - `generatePaper.routes.js`: Routes for generating question papers.

- **Environment Configuration:**
  - `.env`: Configuration file for environment variables.
  - `.env.sample`: Sample file for environment variables.

- **Gitignore:** Specifies files and directories to be ignored by Git.

- **Application Entry Point:**
  - `index.js`: Entry point for the application.

- **Package Files:**
  - `package.json`: Configuration file for npm, specifying project details and dependencies.
  - `package-lock.json`: Automatically generated file with version information for npm dependencies.


## Setup

1. **Install node.js:**

   ```bash
   Download and install Node.js from nodejs.org.

2. **Clone the Repository:**

   ```bash
   git clone https://github.com/Vaibhav0216/Question-Paper-Generator-Reelo.git

3. **Navigate to the Project Directory:**

   ```bash
   cd Question-Paper-Generator-Reelo
  
4. **Install Dependencies:**
  
   ```bash 
   npm install

5. **Configure MongoDB:**

   Update the MongoDB connection string in the .env file.
   ```bash
   MONGO_URI=your-mongodb-connection-string 

6. **Run the Application:**

   ```bash
   npm start


## Overview

Welcome to the Question Paper Generator, a Node.js application designed to create question papers based on specified criteria. This repository contains the code for the application, allowing you to generate question papers with ease. Questions are stored on a MongoDB server.

## Features

- **Modular and Extensible:** The code is designed to be modular and extensible, following best practices and community conventions. Easily scale the application with new requirements.

- **MongoDB Integration:** Questions are now stored on a MongoDB server. The application connects to the database to fetch questions for paper generation.

- **Criteria Configuration:** Define questions in the MongoDB database and adjust criteria for generating question papers in the `questionPaperGenerator.js` file.

- **Example Usage:** The README provides clear examples of setting up the application, connecting to MongoDB, defining questions, and generating question papers.

- **Controllers:**
  - `createQuestion.js`: Controller for creating and storing questions.
  - `generatePaper.js`: Controller for generating question papers.

- **Helpers:**
  - `allQuestion.js`: Helper function for fetching all questions from the question store.
  - `generateQuestionPaper.js`: Helper function for generating a question paper based on specified criteria.

- **Models:**
  - `question.js`: Model representing the structure of a question with attributes like question, subject, topic, difficulty, and marks.

- **Node Modules:** External packages and dependencies installed using npm.

- **Routes:**
  - `allQuestions.routes.js`: Routes for fetching all questions.
  - `createQuestion.routes.js`: Routes for creating and storing questions.
  - `generatePaper.routes.js`: Routes for generating question papers.

- **Environment Configuration:**
  - `.env`: Configuration file for environment variables.
  - `.env.sample`: Sample file for environment variables.

- **Gitignore:** Specifies files and directories to be ignored by Git.

- **Application Entry Point:**
  - `index.js`: Entry point for the application.

- **Package Files:**
  - `package.json`: Configuration file for npm, specifying project details and dependencies.
  - `package-lock.json`: Automatically generated file with version information for npm dependencies.


## Setup

1. **Install node.js:**

   ```bash
   Download and install Node.js from nodejs.org.

2. **Clone the Repository:**

   ```bash
   git clone https://github.com/Vaibhav0216/Question-Paper-Generator-Reelo.git

3. **Navigate to the Project Directory:**

   ```bash
   cd Question-Paper-Generator-Reelo
  
4. **Install Dependencies:**
  
   ```bash 
   npm install

5. **Configure MongoDB:**

   Update the MongoDB connection string in the .env file.
   ```bash
   MONGO_URI=your-mongodb-connection-string 

6. **Run the Application:**

   ```bash
   npm start


## Demo

https://github.com/Vaibhav0216/Question-Paper-Generator-Reelo/assets/92253900/5e536f03-954c-4a2e-9017-da0fcb3675fb


## Testing

- **To add questions to database:**

  Sample data :-
  ```bash
  {
     "question": "Evaluate the integral: ∫(x^2 + 2x)dx",
      "subject": "Math",
      "topic": "Calculus",
      "difficulty": "Hard",
      "marks": 15
  }

- **To generate a question paper**

  Sample data :-
  ```bash
  {
    "totalMarks":100,
    "distribution":{
        "Easy":20,
        "Medium":50,
        "Hard":30
    }
  }


## Additional Features
We can add more features on this project :- 

  1. **Subject-Based Question Paper Generation:**
     - Users can now specify the subject for which they   want to generate a question paper, providing a more   focused and relevant set of questions.
  
  2. **Class-Based Question Paper Generation:**
     - Introduce the concept of classes or grade   levels, allowing users to specify the class for which   they want to generate a question paper.
  
  3. **Topic-Based Filtering:**
     - Extend the criteria to include topics within a   subject, allowing users to select specific topics and   customize the content of the question paper.
  
  4. **Percentage Distribution for Subjects/Topics:**
     - Users can now specify the percentage   distribution of questions from different subjects or   topics, providing greater control over the   composition of the question paper.
  
  5. **Difficulty Level Adjustment:**
     - Adjust the difficulty level distribution for   each subject or topic independently, allowing users   to fine-tune the difficulty levels based on their   preferences.
  
  6. **Randomization:**
     - Introduce a randomization feature that shuffles   the order of questions within a paper, reducing the   risk of cheating during exams.
  
  7. **Printable Question Papers:**
     - Implement functionality to generate printable   question papers in various formats (PDF, Word, etc.)   for easy distribution and usage during exams.
  
  8. **Question Bank Management:**
     - Develop a system for managing a comprehensive   question bank. Users can add, edit, and delete   questions to keep the question bank relevant.
  
  9. **Version Control for Question Papers:**
     - Implement version control for question papers,   allowing users to maintain different versions and   track changes.
  
  10. **User Accounts:**
      - Introduce user accounts for teachers or   administrators. Each user can have their own profile,   and their preferences for generating question papers   can be saved for future use.
  
  11. **Historical Data and Analytics:**
      - Keep track of historical data on generated   question papers. Analytics can provide insights into   the usage patterns and effectiveness of certain   question papers.
  
  12. **Export/Import Functionality:**
      - Allow users to export and import question   papers, facilitating sharing among educators and   streamlining the process of using predefined   templates.
  
  13. **Multi-Language Support:**
      - Added multi-language support for the user   interface to accommodate users from different regions.
  
  14. **Mobile Responsiveness:**
      - Ensure that the application is responsive and   accessible on various devices, including mobile   phones and tablets.
