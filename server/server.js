// Creating a structure

const express = require('express');
const cors = require('cors');

// const http = require('http');
// const hostname = require('hostname');
const port = 3000;


// Initializing the App 
const app = express();

app.use(express.json());
app.use(cors());

// Router
app.use('/api', require('./src/router') );

app.listen(port);


// const express = require("express")
// var app = express()

// app.get("/",function(request,response){
// response.send("Hello World!")
// })

// app.listen(10000, function () {
// console.log("Started application on port %d", 10000)
// });