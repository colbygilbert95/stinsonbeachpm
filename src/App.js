import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import 'react-dates/lib/css/_datepicker.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { StripeProvider } from 'react-stripe-elements';


import { BrowserRouter, Route, NavLink, HashRouter, Switch } from "react-router-dom";
import './index.js';
import Home from "./pages/Home/Home";
import Blog from "./pages/Blog/Blog";
import Single_blog from "./pages/Single_blog/Single_blog";
import Book_Your_Rental from "./pages/Book_Your_Rental/Book_Your_Rental";
import Check_availability from "./pages/Check_availability/CheckAvailability";
import Property_Deatils from "./pages/Property_Deatils/PropertyDeatils";
import Guarantee from "./pages/Guarantee/Guarantee";
import Test from "./pages/Test/Test";
import Checkout from './pages/Checkout/Checkout';

class App extends Component {
	render() {
		return (
			<StripeProvider apiKey="pk_test_gTILJQKMDQTwNk6vS8gNwbib00UhqAgoeB">
				<BrowserRouter>
					<div>
						<div className="content">
							<Route exact path="/" component={Home} />
							<Route exact path="/Blog" component={Blog} />
							<Route exact path="/Single_blog" component={Single_blog} />
							<Route exact path="/Book_Your_Rental" component={Book_Your_Rental} />
							<Route exact path="/Check_availability" component={Check_availability} />
							<Route exact path="/Property_Deatils" component={Property_Deatils} />
							<Route exact path="/Guarantee" component={Guarantee} />
							<Route exact path="/Test" component={Test} />
							<Route exact path="/11_Sierra" component={Property_Deatils} />
							<Route exact path="/Mouse_Hole" component={Property_Deatils} />
							<Route exact path="/Casita_Azul" component={Property_Deatils} />
							<Route exact path="/La_Playa" component={Property_Deatils} />
							<Route exact path="/La_Sirena" component={Property_Deatils} />
							<Route exact path="/La_Paz" component={Property_Deatils} />
							<Route exact path="/Agua_Verde" component={Property_Deatils} />
							<Route exact path="/Mermaid_View" component={Property_Deatils} />
							<Route exact path="/27_Pradero" component={Property_Deatils} />
							<Route exact path="/checkout" component={Checkout} />
						</div>
					</div>
				</BrowserRouter>
			</StripeProvider>
		);
	}
}

export default App;