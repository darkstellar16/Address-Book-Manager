const express = require("express");

const route = express.Router();


const delData = require("../../controller/delete/index.js");

route.delete('/:id', delData)  //delete route has been created to delete the data of specified id....


module.exports = route;