

const ethBlock = require("../../models/ethBlock");

const ethBlockAPI = (router: any) => {
    router.route('/eth')
        .post(function(req: any, res: any) {
        })
        .get(function(req: any, res: any) {
            ethBlock.find((err: any, data: any)=>{
                console.log(err, data)
                if (err) throw err;
                res.json(data);
            });
        })
        .put(function(req: any, res: any) {
        })
        .delete(function(req: any, res: any) {
        });

}

module.exports = ethBlockAPI;