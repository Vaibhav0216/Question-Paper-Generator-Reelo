import express from 'express';
import Question from '../models/question.js';

const getAllQuestions=async()=>{
  try {
    const questions = await Question.find();
    return questions;
  } catch (err) {
    console.log(err);
    return { message: err };
  }
} 

export default getAllQuestions;




 