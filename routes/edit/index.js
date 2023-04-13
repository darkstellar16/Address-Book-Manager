const express = require("express");


const route = express.Router();

const editData = require("../../controller/edit/index.js");

route.patch('/:id', editData);

module.exports = route
