var User = require('../models/User');

var getErrorMessage = function (err) {
    var message = '';
    if (err.code) {
      switch (err.code) {
        case 11000:
        case 11001:
          message = 'Username has already exists';
          break;
        default:
          message = 'Something went wrong';
      }
    } else {
      for (var errName in err.errors) {
        if (err.errors[errName].message) {
          message = err.errors[errName].message;
        }
      }
    }
    return message;
  }

exports.renderSignup = function(req,res){
    if(!req.user){
        res.render('signup',{
            title:'Sign up',
            messages:req.flash('error')
        });
    }else{
        return res.redirect('/');
    }
    
};

exports.signup = function(req,res,next){
    console.log(req.body.user);
    if(!req.user){
        var user = new User(req.body.user);
        user.provider = 'local';
        console.log(user);
        user.save(function(err){
            if(err){
                var message = getErrorMessage(err);
                req.flash('error',message);
                return res.redirect('/');
            } 
            req.login(user,function(err){
                console.log('hello');
                if(err) return next(err);
                return res.json({user});
            });
        });

    }else{
        return res.redirect('/');
    }
}

exports.renderLogin = function(req,res){
    if(!req.user){
        res.render('login',{
            title:'Log in',
            messages:req.flash('error') || req.flash('info')
        });
    }else{
        return res.redirect('/');
    }
    
};

exports.logout = function(req,res){
    req.logout();
    res.redirect('/');
}

exports.editprofile = function(req,res){
    console.log(req.body);
    User.findOneAndUpdate({"_id":ObjectId(req.user.id)},req.body,function(err, user){
        if (err) return res.send(err);
        return res.json({user:user});
    });
}

exports.saveOAuthUserProfile = function(req,profile,done){
    User.findOne({
        provider:profile.provider,
        providerId: profile.providerId
    },function(err,user){
        if(err) return done(err);
        else{
            if(!user){
                var possibleUsername = profile.Username
                    ||(profile.email ? profile.email.split('@')[0]:'');
                User.findUniqueUsername(possibleUsername,null,function(availableUsername){
                    profile.username = availableUsername;
                    user = new User(profile);
                        if(err){
                            var message = getErrorMessage(err);
                            req.flash('error',message);
                            return res.redirect('/signup');
                        }
                        return done(err,user);
                });
            }else{
                return done(err,user);
            }
        }
    });
};