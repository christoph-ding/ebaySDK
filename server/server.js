
// 'port' to listen to (eg. 8000 / 8080)
// top should be dependencies > constants

// RUN "node server/server.js"
// Bad practice to edit package.json directly

// npm gets us express
// RUN "npm install express --save"
// https://expressjs.com/en/starter/installing.html
// want to containerize each "pond" (ie. app) for dependencies
// Good practice: minimize global libraries and containerize dependency

// server should handle "get" request
// open up http://localhost:8000 OR "curl http://localhost:8000"
// alternative is "postman" (api testing)

// instead of 'node server/server.js' using 'nodemon server/server.js'


// define "endpoint": place going to relative to root (eg. "/" or "/abe")
// essentially, server is a dashboard, then endpoints are buttons (same as interface?)


// node is NOT opinionated, there are too many ways to do things


// node signature pattern 1 (api) req/res/cb
// pattern 2 (i/o) error/data


// what to do
// 1. send html


var express = require('express');
var fs = require('fs');
var path = require('path'); //has useful 'join' shit
var rootDir = "C:/test/ebaySDK";

var app = express();
const PORT = 8000 || production.env.NODE_ENV // This is weird (heroku will interpet)

app.listen(PORT, function () {
    console.log("Hi I'm running on port:", PORT);
});

app.get("/", function (req, res) {
    var pathToHtml = path.join(rootDir, 'client/index.html');

    res.sendFile(pathToHtml);

    //fs.readFile(pathToHtml, 'utf8', function (err, data) {
    //    if (err) {
    //        return console.log('error:', err);
    //    }
    //    //console.log('contents:', data);
    //    res.send(data); // completes the request-response cycle
    //});

    //res.status(500).send();
    //res.send('sent msg'); // completes the request-response cycle
});

//app.get("/abe", function () {
//    console.log("You just did GET for 'abe'");
//});

//function doesEndpointExist(str) {
//    // check str
//}

