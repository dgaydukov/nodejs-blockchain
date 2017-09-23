/**
 * Module dependencies.
 */


import {Schema, model} from "mongoose";



const ethBlockSchema: Schema = new Schema({
    number: { type: Number, required: true, unique: true },
    hash: { type: String, required: true, unique: true },
    timestamp: Date,
    difficulty: Number,
    transactions: Number,
    value: Number,
    total_fee: Number,
});


export const ethBlockModel = model('eth_block', ethBlockSchema);