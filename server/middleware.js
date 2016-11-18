
var staticRouterFactory = require('./routers/staticRouter.js');

exports.initRouter = function (app) {
    var staticRouter = staticRouterFactory.createRouter();
    app.use("/", staticRouter); 
};

