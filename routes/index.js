const express = require("express");

const route = express.Router();

const add = require("../routes/add/index.js")

const del = require("../routes/delete/index.js")

const edit = require("../routes/edit/index.js")

const filter = require("../routes/filter/index.js")



route.use('/add',add);

// route.use('/del',del);

// route.use('/edit',edit);

// route.use('/filter',filter);


module.exports=route;