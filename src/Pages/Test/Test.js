import React, { Component } from "react";
import axios from "axios";

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