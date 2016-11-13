
// 'port' to listen to (eg. 8000 / 8080)
// top should be dependencies > constants

// RUN "node server/server.js"
// Bad practice to edit package.json directly

// npm gets us express
// RUN "npm install express --save"
// want to containerize each "pond" (ie. app) for dependencies
// Good practice: minimize global libraries and containerize dependency

var express = require('express');

var app = express();
const PORT = 8000 || production.env.NODE_ENV // This is weird (heroku will interpet)

app.listen(PORT, function () {
    console.log("Hi I'm running on port:", PORT);
});
