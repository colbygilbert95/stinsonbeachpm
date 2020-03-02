import React, { Component } from "react";
import { BrowserRouter, Route, NavLink, HashRouter, Switch } from "react-router-dom";
import './index.js';
import Home from "./pages/Home/Home.js";
import Blog from "./pages/Blog/Blog.js";
import Single_blog from "./pages/Single_blog/Single_blog.js";
import Book_Your_Rental from "./pages/Book_Your_Rental/Book_Your_Rental.js";
import Check_availability from "./pages/Check_availability/Check_availability.js";
import Property_Deatils from "./pages/Property_Deatils/Property_Deatils.js";
import Guarantee from "./pages/Guarantee/Guarantee.js";
import Test from "./pages/Test/Test.js";
import Sierra_11 from "./pages/Property_Deatils/Sierra_11.js";
import Mouse_Hole from "./pages/Property_Deatils/Mouse_Hole.js";
import Casita_Azul from "./pages/Property_Deatils/Casita_Azul.js";
import La_Playa from "./pages/Property_Deatils/La_Playa.js";
import La_Sirena from "./pages/Property_Deatils/La_Sirena.js";
import La_Paz from "./pages/Property_Deatils/La_Paz.js";
import Agua_Verde from "./pages/Property_Deatils/Agua_Verde.js";
import Mermaid_View from "./pages/Property_Deatils/Mermaid_View.js";
import Pradero_27 from "./pages/Property_Deatils/Pradero_27.js";


class Main extends Component {
	render() {
		return (
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
						<Route exact path="/Sierra_11" component={Sierra_11} />
						<Route exact path="/Mouse_Hole" component={Mouse_Hole} />
						<Route exact path="/Casita_Azul" component={Casita_Azul} />
						<Route exact path="/La_Playa" component={La_Playa} />
						<Route exact path="/La_Sirena" component={La_Sirena} />
						<Route exact path="/La_Paz" component={La_Paz} />
						<Route exact path="/Agua_Verde" component={Agua_Verde} />
						<Route exact path="/Mermaid_View" component={Mermaid_View} />
						<Route exact path="/Pradero_27" component={Pradero_27} />
					</div>
				</div>
			</BrowserRouter>
		);
	}
}

export default Main;