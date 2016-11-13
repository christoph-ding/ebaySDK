
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


var express = require('express');

var app = express();
const PORT = 8000 || production.env.NODE_ENV // This is weird (heroku will interpet)

app.listen(PORT, function () {
    console.log("Hi I'm running on port:", PORT);
});

//app.get("/", function (req, res, cb) {
app.get("/", function (req, res) {
    //console.log("You just did GET", req, res); //NOTE: lots of stuff built in here
    console.log("You just did GET", res); //NOTE: lots of stuff built in here

    //res.status(500).send();
    res.send('sent msg'); // completes the request-response cycle
});

app.get("/abe", function () {
    console.log("You just did GET for 'abe'");
});


function doesEndpointExist(str) {
    // check str
}
