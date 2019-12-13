require('dotenv').config()
const path = require('path');
const mysql=require('mysql');
const knex=require('knex');

module.exports = function(app,connection){
	app.get('/test', async (req, res, next) => {
		connection.query("SELECT * FROM property", function (err, result, fields) {
		if (err) throw err;
		console.log(result);
	  });	
	});
}
// https://dev.to/kmaryam27/

