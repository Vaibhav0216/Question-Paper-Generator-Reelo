import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config({ path: '.env' });
import createQuestionRouter from './routes/createQuestion.routes.js';
import generatePaperRouter from './routes/generatePaper.routes.js';

mongoose.connect(process.env.mongodbURL)
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.log(err));

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Welcome to Question Paper Generator API');
});


app.use('/', createQuestionRouter);
app.use('/', generatePaperRouter);
 
app.listen(process.env.PORT, () => {
  console.log(`Server is running at http://localhost:${process.env.PORT}`);
}); 
 