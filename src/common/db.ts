

import * as mongoose from "mongoose";

/**
 * set mongoose configuration and promise to avoid
 * DeprecationWarning: Mongoose: mpromise (mongoose's default promise library) is deprecated,
 * @type {PromiseConstructor}
 */
//mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/nodeJsBlockChain', { useMongoClient: true });