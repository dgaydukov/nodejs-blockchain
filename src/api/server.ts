/**
 * Module dependencies.
 */
import * as express from "express";
import * as debug from 'debug';


/**
 * Create Express server.
 */
const app = express();


const port = process.env.PORT || process.env.port ||  3000;

app.use("/api", (req, res, next)=>{
     res.send("API 1")
})

/**
 * Start Express server.
 */
app.listen(port, () => {
    console.log(("Node.js Api is running at http://localhost:%d"), port);
});

module.exports = app;