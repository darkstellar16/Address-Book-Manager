const express = require("express");


const route = express.Router();

const filterData = require("../../controller/filter/index.js");

route.get('/', filterData);    //get route has been created


module.exports = route;