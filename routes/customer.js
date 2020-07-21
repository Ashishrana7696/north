const router=require('express').Router();
let Customer=require('../Models/Customer');
router.route('/').get((req,res)=>{
Customer.find()
.then(customer=>res.json(customer))
.then(err=>res.status(400).json('Error:'+err));

});
router.route('/add').post((req,res)=>{

    const username=req.body.username;
    const password=req.body.password;
    const newUser=new Customer({username},{password});
    newUser.save()
    .then(()=>res.json("user added"))
    .then(err=>res.status(400).json('Error:'+err));
    
    });
    module.exports =router;