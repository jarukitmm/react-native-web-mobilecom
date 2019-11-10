var index = require('../controller/index.controller');
var product = require('../controller/products.controller');
/* GET home page. */
module.exports = function(app){
 app.route('/')
    .get(index.renderindex);
 app.route('/addproduct')
    .get(index.renderaddproduct)
    .post(product.addproduct);
};
