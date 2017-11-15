# Mining Farm

The purpose of this project is to create a self-growing farm that mines etherium and watch market and decides what to do.
The farm is self-learning, and self-growing app

## Farm Strategy

* In the beginning the farm has 6 video cards that all mine ether
* Farm mines ether, watch market and forecast revenue. And base on that, in every point of time decides what to do
1) Exchange ether to usd
2) Exchange ether to bitcoin
3) Buy another video card and grow itself
* For buying video card, we use [smart contract](https://www.ethereum.org/greeter).
Of course you can get cash and buy video card by yourself, but really, smart contracts are more interesting:)

## Farm Description

System learns to choose the most profitable crypto currency and mine it for some time. The more less time for mining, the more accurate profit forecast and prices &
currency risks, but more higher commission percent on selling mined currency. Time of mining can be limited. Limit determined by the ratio of mining farm to currency risk.
Switching from one currency to another has some price, that goes down with time. Also with time grows probability of real mining profit from expected, forecasting reassess and
system can make decision.

## Technology used

* Node.js [v7](https://nodejs.org/en/blog/release/v7.0.0/) web server
* Mongoose [mongoose](https://www.npmjs.com/package/mongoose)
* Etherium [geth](https://github.com/ethereum/go-ethereum/wiki/geth)  cli command
* Etherium [api](https://github.com/ethereum/wiki/wiki/JavaScript-API)  js libbraty for geth
* Etheruim [json-rpc](https://github.com/ethereum/wiki/wiki/JSON-RPC)  api for local geth
* Machine learning tool [tensorflow](https://www.tensorflow.org) for self-learning