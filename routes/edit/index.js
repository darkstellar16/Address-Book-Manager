const express = require("express");    //express has been required....


const route = express.Router();

const editData = require("../../controller/edit/index.js");

route.patch('/:id', editData);     //patch route has been created which will update only the selected id....

module.exports = route
