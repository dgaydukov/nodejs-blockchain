/**
 * Module dependencies.
 */
import * as express from "express";
require("../common/db");

/**
 * require watcher to execute
 */
require("./watchers/blockWatcher");


/**
 * Create Express server.
 */
const app = express();


const port: string = process.env.PORT || process.env.port ||  3000;

/**
 * Start Express server.
 */

app.listen(port, (err: any) => {
    console.log(("Node.js Monitor is running at http://localhost:%d"), port);
});