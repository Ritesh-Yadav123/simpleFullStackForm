const express=require('express');
const router=express.Router();

let viewing=(db)=>{
    router.get('/viewData',(req,res)=>{
        db.query('select name, email from users',(err,result)=>{
            if(err) throw err;
            res.json(result);
        })
    })
    return router;
}

module.exports=viewing;