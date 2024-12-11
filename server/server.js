import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import dotenv from 'dotenv'; 
dotenv.config();

const app=express();
const MONGO_URL=process.env.MONGO_URL
const PORT=process.env.PORT || 5000
console.log(MONGO_URL, PORT);


//connect to mongoose db
mongoose.connect(MONGO_URL).then(() => {
    console.log(`Connected to MongoDB at port ${PORT}`);
    app.listen(PORT, () => {
        
    })
    
}).catch((err) => {
    console.log(err);
});
