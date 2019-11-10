var Product = require('../models/Product');

exports.addproduct = function(req,res){
    new_product = new Product(req.body);
    console.log(new_product);
    new_product.save(function(err){
        if(err) res.json({status:'error'});
        else res.json({status:'completed',product:new_product});
    })
}
exports.allproduct = function(req,res){
    Product.find({},function(err,products){
        if(err)res.json({product:''});
        else res.json({product:products});
    })
}

exports.searchproduct = function(req,res){
    console.log(req.body);
    Product.find({"name":/req.body/},function(err,products){
        if(err)res.json({products:'',msg:'error searh'});
        else res.json({products:products});
    })
}