import express from 'express';
import ErrorHandler from './middlewares/ErrorHandler.js';
import dotenv from 'dotenv';
import { ConnectDB } from './config/db.js';
import cors from 'cors';

//propogating dotenv
dotenv.config({
    path:'../.env'
});

//importing environment variables
const PORT = process.env.PORT;
const ORIGIN = process.env.ORIGIN;

//Establishing Database Connection
ConnectDB();

//Initializing Express Application
const app = express();

//Allowing requests from localhost:5173
app.use(cors({
    origin:ORIGIN
}));

//parse incoming json and form data 
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//importing routes







//exiting middlewares
app.use(ErrorHandler);

app.listen(PORT,()=>{
    console.log("Listening on port : ",PORT);
});