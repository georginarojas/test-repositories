// Creating a structure

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT;

// Initializing the App 
const app = express();

app.use(express.json());
app.use(cors());

// Router
app.use('/api', require('./src/router') );

app.listen(port);
