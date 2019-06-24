var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

// server config
app.use('/', express.static(__dirname + '/views'));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// set routers for api
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
app.use('/api', indexRouter);
app.use('/users', usersRouter);

// catch errors by client
app.use(function(req, res, next) {
  next(createError(404));
});

// catch server errors
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);

  if(err.status == 404)
    res.redirect('/404.html');

  if(err.status == 400)
    res.redirect('/400.html');

    res.redirect('/error.html');

})

module.exports = app;
