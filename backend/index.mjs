import cors from 'cors';
import express from 'express';
import dotenv from 'dotenv';

const app = express()

dotenv.config();

app.use(cors());