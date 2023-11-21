// Assuming getAllQuestions is the default export from "../controller/allQuestion.js"
import express from 'express';

import  getAllQuestions from "../controller/allQuestion.js";

const router = express.Router(); 

router.route("/all-questions").get(getAllQuestions);

export default router;
