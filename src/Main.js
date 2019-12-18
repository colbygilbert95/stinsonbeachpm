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
import Cute_And_Colourful_Oceanside_Cottage_w_Garden from "./Pages/Property_Deatils/Cute_And_Colourful_Oceanside_Cottage_w_Garden.js";
import Stinson_Beach_Vibe_Cheerful_Cottage_w_Garden from "./Pages/Property_Deatils/Stinson_Beach_Vibe_Cheerful_Cottage_w_Garden.js";
import Comfortable_updated_vintage_beach_house from "./Pages/Property_Deatils/Comfortable_updated_vintage_beach_house.js";
import Oceanfront_Apartment_in_Stinson_Beach from "./Pages/Property_Deatils/Oceanfront_Apartment_in_Stinson_Beach.js";
import Relax_And_Enjoy_an_Oceanfront_Getaway_La_Paz from "./Pages/Property_Deatils/Relax_And_Enjoy_an_Oceanfront_Getaway_La_Paz.js";

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
					<Route exact path="/Cute_And_Colourful_Oceanside_Cottage_w_Garden" component={Cute_And_Colourful_Oceanside_Cottage_w_Garden}/> 
					<Route exact path="/Stinson_Beach_Vibe_Cheerful_Cottage_w_Garden" component={Stinson_Beach_Vibe_Cheerful_Cottage_w_Garden}/> 
					<Route exact path="/Comfortable_updated_vintage_beach_house" component={Comfortable_updated_vintage_beach_house}/> 
					<Route exact path="/Oceanfront_Apartment_in_Stinson_Beach" component={Oceanfront_Apartment_in_Stinson_Beach}/> 
					<Route exact path="/Relax_And_Enjoy_an_Oceanfront_Getaway_La_Paz" component={Relax_And_Enjoy_an_Oceanfront_Getaway_La_Paz}/> 
				</div>
			</div>
			</BrowserRouter>
		);
	}
}

export default Main;