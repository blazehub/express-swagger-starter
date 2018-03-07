"use strict";

const SwaggerExpress = require('swagger-express-mw');
const app = require("express")();
const bluebird = require('bluebird');
const mongoose = require('mongoose');
const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/blazehub";

global.Promise = bluebird;

mongoose.connect(mongoUrl, err => {
    if (err) {
        console.error(err);
    }
    else {
        console.info("Connected to DB");
    }
});

var counter = 0;
var logMiddleware = (req, res, next) => {
    var reqId = counter++;
    if (reqId == Number.MAX_VALUE) {
        reqId = counter = 0;
    }

    console.info(reqId + " " + req.ip + " " + req.method + " " + req.originalUrl);
    next();
};
app.use(logMiddleware);

var config = {
    appRoot: __dirname
};
module.exports = app;



SwaggerExpress.create(config, function (err, swaggerExpress) {
    if (err) { throw err; }

    swaggerExpress.register(app);

    var port = process.env.PORT || 10010;
    app.listen(port, (err) => {
        if (!err) {
            console.info("Server started on port " + port);
        } else {
            console.error(err);
        }
    });
});
