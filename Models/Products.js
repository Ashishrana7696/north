const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const productSchema=new Schema({

    productId:{type:String,required:true},
    productName:{ type:String },
    price:{type:String},
    Unit_In_Stock:{type:String}
        
     }, {timestamps:true});

        const Products=mongoose.model('Products',productSchema);
        module.exports=Products;