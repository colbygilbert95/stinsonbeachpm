const path = require('path');
const mysql=require('mysql');

module.exports = function(app,connection){
	app.get('/test',function(req,res){
		connection.query('Select * from platform',function(err,data){
			console.log(data);
			(err)?res.send(err):res.json({users:data});
		})
	})
}
// https://dev.to/kmaryam27/

