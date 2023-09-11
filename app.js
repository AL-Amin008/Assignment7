const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const jwt= require('jsonwebtoken');
const mysql = require('mysql');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const expressMongoSanitize = require('express-mongo-sanitize');

const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const hpp = require('hpp');
const validator = require('validator');

dotenv.config();

const app= express();

app.use(bodyParser.json());
app.use(cookieParser());
app.use(multer().array());
app.use(cors());
app.use(expressMongoSanitize());
app.use(helmet());
app.use(hpp());


app.use((req,res)=>{
   res.status(404).json({status: 'error',message:'Route not found'});

});
const PORT = process.env.RUNNING_PORT || 5500;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});