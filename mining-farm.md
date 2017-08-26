# Mining Farm

The purpose of this project is to create a self-growing farm that mines etherium and watch market and decides what to do.

## Farm Strategy

* In the beggining the farm is 6 video cards that mine ether
* Farm mines ether, and watch market and in every point of time decides what to do
** Exchange ether to usd
** Exchange ehter to bitcoin
** Buy another videocard and grow itself
* For buying videocard, we use [smart contract](https://www.ethereum.org/greeter) (of course you can get cash and buy videocard by yourself, but really, smart contracts are more interesitng:))



## Technology used

* Etherium [api](https://github.com/ethereum/wiki/wiki/JavaScript-API)
* MEAN stack (mongo, express, angular, node) (For real project the best way is to use pg, but i want to show how to work with mongo)
* es6, async-await