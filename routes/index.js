const express = require("express");

const route = express.Router();

const add = require("../routes/add/index.js")

const del = require("../routes/delete/index.js")

const edit = require("../routes/edit/index.js")

const filter = require("../routes/filter/index.js")



route.use('/add', add);        //add route

route.use('/del', del);         //delete route

route.use('/edit', edit);      //edit route

route.use('/filter',filter);  //filter route


module.exports = route;