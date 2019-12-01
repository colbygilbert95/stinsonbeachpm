var mysql      = require('mysql');

var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : '',
	database : 'stinsonbeachpm'
});
		
connection.connect();

connection.query('SELECT * from Platform', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', fields);
});