const express = require("express");


const route = express.Router();

const addData = require("../../controller/add/index.js");

route.post("/", addData);   //post route has been created to add the data....

module.exports = route;