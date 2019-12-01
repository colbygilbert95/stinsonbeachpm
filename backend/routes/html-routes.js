const path = require('path');
const mysql=require('mysql');
const knex=require('knex');

module.exports = function(app,connection,getPlatform,insertPlatform){
	app.get('/test', async (req, res, next) => {
	  
	  try {
		const visit = {
			Name: 'Hello world',
			IconURL:'https://cloud.google.com/_static/382895f69c/images/cloud/cloud-logo.svg',
			timestamp: new Date(),
		};
		insertPlatform(knex, visit);
		// Query the last 10 visits from the database.
		const visits =  getPlatform(knex);
		res
		  .status(200)
		  .set('Content-Type', 'application/json')
		  .send(`Last 10 visits:\n${JSON.stringify(visits)}`)
		  .end();
		  
	  } catch (err) {
		next(err);
	  }
	});
}
// https://dev.to/kmaryam27/

