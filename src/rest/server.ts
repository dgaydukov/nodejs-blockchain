/**
 * Module dependencies.
 */
import * as express from "express";
import * as mongoose from "mongoose";
import * as bodyParser from 'body-parser';

/**
 * Create Express server.
 */
const app = express();


// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const port = process.env.PORT || process.env.port ||  3000;

/**
 * Routes for API
 */
var router = express.Router();

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('request is processing\n');
    next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working
router.get('/', function(req, res) {
    res.json({ message: 'Node.js BlockChain REST API v.1.1' });
});

// all of our routes will be prefixed with /api
app.use('/api', router);

/**
 * require all api routes here
 */
require("./api/ethBlock")(router);


/**
 * Start Express server.
 */
app.listen(port, () => {
    console.log(("Node.js Api is running at http://localhost:%d"), port);
});

module.exports = app;