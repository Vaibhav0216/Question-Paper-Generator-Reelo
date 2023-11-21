import express from 'express';
import generatePaper from '../controller/generatePaper.js'
const router = express.Router(); 

  
router.route('/generate-paper').post(generatePaper);

export default router; 
