
// console.log('look! this runs in sync');

var fs = require('fs');
var path = require('path');
var express = require('express');

exports.inject = function (app) {
    var staticRouter = express.Router(); //TODO: look this up
    staticRouter.get("/", function (req, res) {
        var pathToHtml = path.join(__dirname, '../client/index.html');
        res.sendFile(pathToHtml);
    });
    staticRouter.get("/style.css", function (req, res) {
        var pathToCss = path.join(__dirname, '../client/style.css');
        res.sendFile(pathToCss);
    });
    app.use("/", staticRouter); //TODO: what is this? bad practice?
};
