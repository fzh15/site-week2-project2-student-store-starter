// YOUR CODE HERE

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");




///create expree 
const app = express();

//mouting middleware 

app.arguments(cors());
app.arguments(morgan());
app.arguments(express.json());



// app.arguments("/", storeRouter)

module.exprerts = app;



