

/* DEPENDENCIES */
var express = require('express');
var mid = require('./middleware.js');

/* GLOBAL VARS */
var app = express();
const PORT = 8000 || production.env.NODE_ENV; // This is weird (heroku will interpet)

app.listen(PORT, function () {
    console.log("Hi I'm running on port:", PORT);
});

/* EXAMPLE: How 'get' works with diff paths (eg. url/ vs url/test vs url/test/test2
    app.get("/", function (req, res) {
        res.send('hit root'); // completes the request-response cycle
    });

    app.get("/test", function () {
        res.send('hit /test'); // completes the request-response cycle
    });

    app.get("/test/test2", function () {
        res.send('hit /test/test2'); // completes the request-response cycle
    });
*/

/* EXAMPLE: Edit status
    app.get("/", function (req, res) {
        res.status(500).send('sending status of 500');
    });
*/

/* EXAMPLE: Serve html to 'get'
    app.get("/", function (req, res) {
        var pathToHtml = path.join(__dirname, '../client/index.html');

        fs.readFile(pathToHtml, 'utf8', function (err, data) {
            if (err)
                return console.log('error:', err);
            res.send(data); // completes the request-response cycle
        });


        // Same as fs.readFile, but shorter
        //res.sendFile(pathToHtml);
    });
*/
/* EXAMPLE: Serve css for html
    // NOTE: html wants css and href is looking at root folder! wow
    app.get("/style.css", function (req, res) {
        var pathToCss = path.join(__dirname, '../client/style.css');
        res.sendFile(pathToCss);
    });
*/


mid.inject(app);

