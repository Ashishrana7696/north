const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');
require('dotenv').config();
const app =express();
const port=process.env.PORT||5000;
app.use(cors());
app.use(express.json());


const uri=process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser:true,useCreateIndex:true, useUnifiedTopology: true});
const connection=mongoose.connection;
connection.once('open',()=>{
    console.log("Mongoose dat conne edtalblisjh  success");
})

const customerRouter=require('./routes/customer');

const productRouter=require('./routes/products');

app.use('/customer',customerRouter);
app.use('/products',productRouter);



app.listen(port,() =>{console.log(`server runing on port: ${port}`);} )