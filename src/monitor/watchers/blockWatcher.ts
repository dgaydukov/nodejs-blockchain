/**
 * Module dependencies.
 */
import * as ethBlock from "../models/ethBlock";
const request = require("request");

const BASE_URL = "http://127.0.0.1:8545";
const RPC_VERSION = "2.0";
const METHOD = "eth_getBlockByNumber";
const WAIT_NEXT_BLOCK = 12;

class BlockWatcher{
    getEther(){
        var number = "0x" + Number(id).toString(16);
        console.log("getBlockByNumber", id, number);
        var body = {
            jsonrpc: RPC_VERSION,
            method: METHOD,
            params:[number, true],
            id: id
        }
        request.post({
            url: BASE_URL,
            body: JSON.stringify(body)
        }, function (error, response, body) {
            try{
                body = JSON.parse(body);
                if(success){
                    success(body)
                }
            }
            catch(e){
                console.log("json corrupted", body, id);
                setTimeout(function () {
                    var next = id + 1;
                    getBlockByNumber(id, success);
                }, WAIT_NEXT_BLOCK * 1000)
            }
        });
    }
    save(body) {
        var transactions = body.result.transactions ? body.result.transactions.length : 0,
            hash = body.result.hash,
            timestamp = new Date(parseInt(body.result.timestamp)*1000),
            difficulty = parseInt(body.result.difficulty),
            total_value = 0,
            total_fee = 0;
        for(var index in body.result.transactions){
            var tran = body.result.transactions[index];
            total_value += parseInt(tran.value);
            total_fee += parseInt(tran.gas) * parseInt(tran.gasPrice);
        }

        const newBlock = ethBlock({
            number: body.id,
            hash: hash,
            timestamp: timestamp,
            difficulty: difficulty,
            transactions: transactions,
            value: total_value,
            total_fee: total_fee,
        });

        newBlock.save(function(err, data) {
            if (err) throw err;
            console.log('User created!', data);
        });
    }
    
    run(){
        db
            .one('select max(number) as max from etc_block_info')
            .then(function (data) {
                recursive(data.max, saveBlock)
            });
    }

    recursive(number, cb) {
        number++;
        getBlockByNumber(number, cb);
    }
}

module.exports = BlockWatcher;