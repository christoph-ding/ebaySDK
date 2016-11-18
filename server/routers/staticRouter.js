
var fs = require('fs');
var path = require('path'); //has useful 'join' shit
var express = require('express');

var sendHtml = function (req, res) {
    var pathToHtml = path.join(__dirname, '../../client/index.html');
    res.sendFile(pathToHtml);
};

var sendCss = function (req, res) {
    var pathToCss = path.join(__dirname, '../../client/style.css');
    res.sendFile(pathToCss);
};

exports.createRouter = function () {
    var staticRouter = express.Router();
    staticRouter.get("/", sendHtml);
    staticRouter.get("/style.css", sendCss);
    return staticRouter;
};
