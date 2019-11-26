import React, { Component } from "react";
import mysql from "mysql";
import axios from "axios";

class Test extends Component{
	
	connection_test = () => {
		var connection = mysql.createConnection({
			socketPath: '/cloudsql/graphic-outlook-259905:us-central1-a:stinsonbeachpm',
			user: 'root',
			password: '',
			database: 'stinsonbeachpm'
		});
		// connection.connect(function(err) {
			// if (err) {
			  // console.error('Error connecting: ' + err.stack);
			  // return;
			// }
			// console.log('Connected as thread id: ' + connection.threadId);
		  // });
		
		
	}
	
	render(){
		return(
			<div>
				Hello{this.connection_test()}
			</div>
		);
	}
}

export default Test;