import React, { Component } from "react";
import { BrowserRouter, Route, NavLink, HashRouter, Switch } from "react-router-dom";
import './index';
import Home from "./pages/Home/Home";
import Blog from "./pages/Blog/Blog";
import Single_blog from "./pages/Single_blog/Single_blog";
import Book_Your_Rental from "./pages/Book_Your_Rental/Book_Your_Rental";
import Check_availability from "./pages/Check_availability/Check_availability";
import Property_Deatils from "./pages/Property_Deatils/Property_Deatils";
import Guarantee from "./pages/Guarantee/Guarantee"; 
import Test from "./pages/Test/Test";


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
					
				</div>
			</div>
			</BrowserRouter>
		);
	}
}

export default Main;