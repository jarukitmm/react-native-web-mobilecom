var user = require('../controller/user.controller');
var passport = require('passport');
module.exports = function (app) {
  app.route('/api/auth/users/signup')
    .get(user.renderSignup)
    .post(user.signup);
  app.route('/api/auth/users/login')
    .get(user.renderLogin)
    .post(passport.authenticate('local', {
        // successRedirect: '/',
        // failureRedirect: '/users/login',
        failureFlash: true
      }),
      function (req, res) {
        res.json({user:req.user});
        // res.json({message:'hello'});
      }
    );
  app.post('/api/auth/users/logout', user.logout);
  app.post('/api/auth/users/editprofile',user.editprofile)
};