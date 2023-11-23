import express from 'express';
import  createQuestion  from '../controller/createQuestion.js'

const router = express.Router(); 

router.route("/question").post(createQuestion);

export default router;
