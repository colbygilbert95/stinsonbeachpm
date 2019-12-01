var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const process = require('process');
const Knex = require('knex');
const crypto = require('crypto');
const mysql = require('mysql');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
app.enable('trust proxy');

// knex connection test

const connect = () => {
  // [START gae_flex_mysql_connect]
  const config = {
    user: process.env.SQL_USER,
    password: process.env.SQL_PASSWORD,
    database: process.env.SQL_DATABASE,
  };

  if (
    process.env.INSTANCE_CONNECTION_NAME &&
    process.env.NODE_ENV === 'production'
  ) {
    config.socketPath = `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`;
  }

  // Connect to the database
  const knex = Knex({
    client: 'mysql',
    connection: config,
  });
  // [END gae_flex_mysql_connect]

  return knex;
};

const knex = connect();


const getPlatform = async knex => {
  const results = await knex
    .select('Name')
    .from('platform')
    .orderBy('timestamp', 'desc')
    .limit(10);

  return results.map(
    visit => `Time: ${visit.timestamp}`
  );
};

const insertVisit = (knex, visit) => {
  return knex('visits').insert(visit);
};





// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const connection = mysql.createConnection({
	host: 'localhost',
	user:'root',
	password:'',//password of your mysql db
	database:'stinsonbeachpm'
});

connection.connect(function(err){
(err)? console.log(err+'+++++++++++++++//////////'): console.log('connection********');
});

require('./routes/html-routes.js')(app, connection,getPlatform,insertVisit);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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
  res.render('error');
});

module.exports = app;
//https://github.com/GoogleCloudPlatform/nodejs-docs-samples/blob/master/appengine/cloudsql/server.js