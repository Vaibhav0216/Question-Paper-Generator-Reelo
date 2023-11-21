import express from 'express';
import Question from '../models/question.js';

const getAllQuestions=async(req,res)=>{
  try {
    const questions = await Question.find();
    res.status(201).json(questions);
  } catch (err) {
    res.status(500).json({ message: err });
  }
} 

export default getAllQuestions;




