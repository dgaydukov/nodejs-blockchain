/**
 * Module dependencies.
 */
import {ethBlockModel} from "../../common/models/ethBlock";
import * as request from "request";

const BASE_URL = "http://127.0.0.1:8545";
const RPC_VERSION = "2.0";
const METHOD = "eth_getBlockByNumber";
const WAIT_NEXT_BLOCK = 12;

class BlockWatcher{
    private getEther(id: number){
        var number = "0x" + Number(id).toString(16);
        console.log("getBlockByNumber", id);
        var body = {
            jsonrpc: RPC_VERSION,
            method: METHOD,
            params:[number, true],
            id: id
        }
        request.post({
            url: BASE_URL,
            body: JSON.stringify(body)
        }, (error: any, response: any, body: string)=>{
            try{
                body = JSON.parse(body);
            }
            catch(e){
                console.log("json corrupted", body, id);
                setTimeout(()=>{
                    var next = id + 1;
                    this.getEther(id);
                }, WAIT_NEXT_BLOCK * 1000)
            }
        });
    }
    private save(body: any) {
        let transactions = body.result.transactions ? body.result.transactions.length : 0,
            hash = body.result.hash,
            timestamp = new Date(parseInt(body.result.timestamp)*1000),
            difficulty = parseInt(body.result.difficulty),
            total_value = 0,
            total_fee = 0;
        for(let index in body.result.transactions){
            let tran = body.result.transactions[index];
            total_value += parseInt(tran.value);
            total_fee += parseInt(tran.gas) * parseInt(tran.gasPrice);
        }

        const newBlock = new ethBlockModel({
            number: body.id,
            hash: hash,
            timestamp: timestamp,
            difficulty: difficulty,
            transactions: transactions,
            value: total_value,
            total_fee: total_fee,
        });

        newBlock.save((err: any, data: any)=>{
            if (err) throw err;
            console.log('User created!', data);
        });
    }
    
    public run(){
        ethBlockModel.findOne({}, {}, { sort: { 'number' : -1 } }, (err: any, block: any)=>{
            this.getEther(block.number+1)
        });
    }
}

const instance = new BlockWatcher();
instance.run();

module.exports = BlockWatcher;