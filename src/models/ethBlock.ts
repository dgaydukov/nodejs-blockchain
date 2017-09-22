/**
 * Module dependencies.
 */
import * as mongoose from "mongoose";

var Schema = mongoose.Schema;

const ethBlockSchema = new Schema({
    number: { type: Number, required: true, unique: true },
    hash: { type: String, required: true, unique: true },
    timestamp: Date,
    difficulty: Number,
    transactions: Number,
    value: Number,
    total_fee: Number,
});


module.exports = mongoose.model('eth_block', ethBlockSchema);