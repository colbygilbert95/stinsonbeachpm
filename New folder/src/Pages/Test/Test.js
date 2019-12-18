import React, { Component } from "react";
import axios from "axios";
/*var gcloud = require('gcloud');

var bigquery = gcloud.bigquery({
  projectId: 'graphic-outlook-259905',
  keyFilename: 'to/keyfile.json'
});
console.log(bigquery);
 */
class Test extends Component{
	
	state = {
		users:[]
	}
	componentDidMount(){
		this.getUsers();
	}
	
	getUsers = _ => {
        axios.get('/test')
		.then((data) => {
		  console.log(data.data);
		  this.setState({users: data.data});
		})
		// .then(({response}) => this.setState({users: response.users}))
		.catch(error => console.log(error));
	  }
	render(){
		return(
			<div>
			
			</div>
		);
	}
}

export default Test;