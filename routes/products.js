const router = require('express').Router();
let products = require('./Models/Products');
router.route('/').get((req,res)=>{

products.find()
.then(products=>res.json(products))
.then(err=>res.status(400).json('Error:'+err));

});
router.route('/add').post((req,res)=>{
    

    const productId=req.body.productId;
    const productName=req.body.productName;
    const price=req.body.price;
    const Unit_In_Stock=req.Unit_In_Stock;

    const newProduct=new Products(
        {productId},
        {productName},
        {price},
        {Unit_In_Stock});
    newProduct.save()
    .then(()=>res.json("product added"))
    .then(err=>res.status(400).json('Error:'+err));
    
    });
    module.exports =router;