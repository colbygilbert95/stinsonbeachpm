import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink, HashRouter, Switch } from "react-router-dom";

const STYLE = {
    infoActive: {
        fontWeight: 'bold'
    },
	infoNoneActive: {
        fontWeight: 'none'
    }
};

export class Header extends Component {
	
  render() {
    return (
		<div>
			<nav className="navbar navbar-default custom-navbar">
				<div className="container-fluid">
					<div className="navbar-header page-scroll">
					   <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
					   <span className="sr-only">Toggle navigation</span>
					   <span className="icon-bar"></span>
					   <span className="icon-bar"></span>
					   <span className="icon-bar"></span>
					   </button>
					   <NavLink className="navbar-brand custom-logo" to="/">
						   <img src="images/logo.png"/>
					   </NavLink>
					</div>
					<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
					   <ul className="nav navbar-nav navbar-right menu_header">
						  <li>
							 <NavLink to="/" style={(window.location.pathname==='/')? STYLE.infoActive : STYLE.infoNoneActive }>Property Management</NavLink>
						  </li>
						  <li>
							 <NavLink to="/Book_Your_Rental" style={(window.location.pathname==='/Book_Your_Rental')? STYLE.infoActive : STYLE.infoNoneActive }>Book Your Rental </NavLink>
						  </li>
						  <li>
							 <a href="tel:415-209-5847">415-209-5847</a>
						  </li>
					   </ul>
					</div>
				</div>
			</nav>
		</div>
    );
  }
  
}

export default Header;
