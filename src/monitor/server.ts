/**
 * Module dependencies.
 */
import * as express from "express";
import * as mongoose from "mongoose";

/**
 * set mongoose configuration and promise to avoid
 * DeprecationWarning: Mongoose: mpromise (mongoose's default promise library) is deprecated,
 * @type {PromiseConstructor}
 */
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/nodeJsBlockChain', { useMongoClient: true });

/**
 * require watcher to execute
 */
require("./watchers/blockWatcher");


/**
 * Create Express server.
 */
const app = express();


const port = process.env.PORT || process.env.port ||  3000;

/**
 * Start Express server.
 */
app.listen(port, () => {
    console.log(("Node.js Monitor is running at http://localhost:%d"), port);
});

module.exports = app;