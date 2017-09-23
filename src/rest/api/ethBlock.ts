/**
 * Get an ethBlock
 */

import {ethBlockModel} from "../../common/models/ethBlock";



const ethBlockAPI = (router: any) => {
    router.route('/eth')
        .post((req: any, res: any)=>{
        })
        .get((req: any, res: any)=>{
            console.log("get request")
            ethBlockModel.find((err: any, data: any)=>{
                console.log(err, data)
                if (err) throw err;
                res.json(data);
            });
        })
        .put((req: any, res: any)=>{
        })
        .delete((req: any, res: any)=>{
        });

}


module.exports = ethBlockAPI;