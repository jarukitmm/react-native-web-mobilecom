var product = require('../controller/products.controller');

module.exports = function(app){
    app.route('/api/products/allproduct')
        .get(product.allproduct);
    app.route('/api/products/searchproduct')
        .get(product.searchproduct);
}