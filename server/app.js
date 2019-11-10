var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var flash = require('connect-flash');
var cors = require('cors');
var passport = require('passport');
var session = require('express-session');
//router
// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
// var productsRouter = require('./routes/products');
// var authRouter = require('./routes/auth');

var app = express();
//database set up
mongoose.connect('mongodb://user:user12345@ds251112.mlab.com:51112/vuedb');
app.use(cors());
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

//cookie-session
app.use(session({
 secret:'secret_key',
 resave: false,
 saveUninitialized: true
}));
app.use(flash());
//passport
require('./config/passport')(passport);
app.use(passport.initialize());
app.use(passport.session());

//route
require('./routes/users')(app);
require('./routes/index')(app);
require('./routes/products')(app);
// app.use('/', indexRouter);
// app.use('/users', usersRouter);
// app.use('/products', productsRouter);
// app.use('/api/auth', authRouter);

//app.use('/products',productRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error.jade');
});
app.use(express.static(__dirname + '/public'));
app.use('*/css',express.static('/public/css'));
app.use('*/js',express.static('/public/js'));

module.exports = app;
