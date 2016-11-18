
/* DEPENDENCIES */
var express = require('express');
var mid = require('./middleware.js');

/* GLOBAL VARS */
var app = express();
const PORT = 8000 || production.env.NODE_ENV; // This is weird (heroku will interpet)

app.listen(PORT, function () {
    console.log("Hi I'm running on port:", PORT);
});

mid.initRouter(app);

