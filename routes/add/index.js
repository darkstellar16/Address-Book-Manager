const express = require("express");


const route = express.Router();

const addData = require("../../controller/add/index.js");

route.post("/", addData);

module.exports = route;