import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
dotenv.config();
app.use(express.json({extented: true}))
app.use(express.urlencoded({extented: true}))
app.use(cors());

const mongodb = "mongodb+srv://adarsh:12344321@todo.noauw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

app.get('/' , (req, res)=> {
    res.send("hello world");
});

const PORT = process.env.PORT || 5000;

mongoose.connect(mongodb, { useUnifiedTopology: true }, {useNewUrlParser: true }).then(()=> console.log(`
server is running `)).catch(err => console.log(err))