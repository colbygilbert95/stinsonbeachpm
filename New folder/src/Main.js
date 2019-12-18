import React, { Component } from "react";
import { BrowserRouter, Route, NavLink, HashRouter, Switch } from "react-router-dom";
import './index.js';
import Home from "./Pages/Home/Home.js";
import Blog from "./Pages/Blog/Blog.js";
import Single_blog from "./Pages/Single_blog/Single_blog.js";
import Book_Your_Rental from "./Pages/Book_Your_Rental/Book_Your_Rental.js";
import Check_availability from "./Pages/Check_availability/Check_availability.js";
import Property_Deatils from "./Pages/Property_Deatils/Property_Deatils.js";
import Guarantee from "./Pages/Guarantee/Guarantee.js"; 
import Test from "./Pages/Test/Test.js";
import Charming_Stinson_Beach_1Bd_Den_Cottage from "./Pages/Property_Deatils/Charming_Stinson_Beach_1Bd_Den_Cottage.js";

class Main extends Component {
	render() {
	return (
			<BrowserRouter>
			<div>
				<div className="content">

					<Route exact path="/" component={Home}/>
					<Route exact path="/Blog" component={Blog}/>
					<Route exact path="/Single_blog" component={Single_blog}/>
					<Route exact path="/Book_Your_Rental" component={Book_Your_Rental}/>
					<Route exact path="/Check_availability" component={Check_availability}/>
					<Route exact path="/Property_Deatils" component={Property_Deatils}/>
					<Route exact path="/Guarantee" component={Guarantee}/>
					<Route exact path="/Test" component={Test}/>
					<Route exact path="/Charming_Stinson_Beach_1Bd_Den_Cottage" component={Charming_Stinson_Beach_1Bd_Den_Cottage}/> 

				</div>
			</div>
			</BrowserRouter>
		);
	}
}

export default Main;