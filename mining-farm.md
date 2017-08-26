# Mining Farm

The purpose of this project is to create a self-growing farm that mines etherium and watch market and decides what to do.
The farm is self-learning, and self-growing programm

## Farm Strategy

* In the beggining the farm is 6 video cards that mine ether
* Farm mines ether, watch market and prognose revenue. And base on that, in every point of time decides what to do
1) Exchange ether to usd
2) Exchange ehter to bitcoin
3) Buy another videocard and grow itself
* For buying videocard, we use [smart contract](https://www.ethereum.org/greeter).
Of course you can get cash and buy video card by yourself, but really, smart contracts are more interesting:)



## Technology used

* Etherium [api](https://github.com/ethereum/wiki/wiki/JavaScript-API)
* Etheruim [json-rpc](https://github.com/ethereum/wiki/wiki/JSON-RPC)
* Machine learning tool [tensorflow](https://www.tensorflow.org) for self-learning
* MEAN stack (mongo, express, angular, node) (For real project the best way is to use pg, but i want to show how to work with mongo)
* es6, async-await