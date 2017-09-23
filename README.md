# NodJs BlockChain

The purpose of this project is to create a self-growing farm that mines etherium and watch market and decides what to do.

## Getting Started

In order to start, you should clone this repo. This project is completely MEAN stack, so you need npm & node environment.

### Prerequisites

As I'm a linux user, this project is best works with linux, but it can work in windows evniroment too.


### Installing

* Clone repository ```git clone git@github.com:dgaydukov/nodejs-blockchain.git```
* Go to project directory ```cd nodejs-blockchain```
* Run project ```npm start```
* Run go etherium ```geth --rpc```

## Project Structure

```
src #directory with source code
    rest #directory with api functions
        api #directory with REST API functions
        server.ts #entry point
    monitor #directory with scripts that watch etherium and update db
        watchers #directory with watchers
        server.ts #entry point
    common #directory with models used by both subprojects
        models #directory with models
        db.ts #database connection & settings
```

## Project Details

Please read [Mining Farm](https://github.com/dgaydukov/nodejs-blockchain/blob/master/mining-farm.md) for more details


## Built With

* [Node v7.0](https://nodejs.org/en/blog/release/v7.0.0) - The web framework


## Authors

* **Gaydukov Dmitiry** - *Take a look* - [How to become a Senior Javascript Developer](https://github.com/dgaydukov/how-to-become-a-senior-js-developer)