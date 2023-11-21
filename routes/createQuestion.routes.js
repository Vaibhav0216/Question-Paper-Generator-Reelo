import express from 'express';
import  createQuestion  from '../controller/createQuestion.js'

const router = express.Router(); 

router.route("/question").get(createQuestion);

export default router;
