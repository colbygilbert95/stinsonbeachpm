import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink, HashRouter, Switch } from "react-router-dom";

const STYLE = {
	infoLogo: {
		'width': '220px',
		'padding': '10px'
	}
}

export class Footer extends Component {
  render() {
    return (
			<div>
				<footer>
					<section className="footers bg-light pt-5 pb-3">
						<div className="container pt-5">
							<div className="row">
								<div className="col-xs-6 mb-20 col-sm-3 col-md-4 footers-one">
									<div className="footers-logo">
										<NavLink to="/"><img src="images/logo_footer.svg" className="logo" alt="Logo" style={STYLE.infoLogo}/></NavLink>
									</div>
								</div>
								<div className="col-xs-6 mb-20 col-sm-3 col-md-2 footers-link-title">
									<h5>C o m p a n y</h5>
									<ul className="list-unstyled">
										<li><a href="#">Our Story</a></li>
										<li><a href="#">Carreers</a></li>
										<li>
											<NavLink to="/Blog">Blog</NavLink>
										</li>
										<li><a href="#">Help</a></li>
									</ul>
								</div>
								<div className="col-xs-6 mb-20 col-sm-3 col-md-2 footers-link-title">
									<h5>H o m e o w n e r </h5>
									<ul className="list-unstyled">
										<li><a href="#">Why Use A Manager</a></li>
										<li><a href="#">Refer Homeowners</a></li>
										<li>
											<NavLink to="/Guarantee">Revenue Guarantee</NavLink>
										</li>
										<li><a href="#">Hospitality Standards</a></li>
									</ul>
								</div>
								<div className="col-xs-6 mb-20 col-sm-3 col-md-2 footers-link-title">
									<h5>G u e s t </h5>
									<ul className="list-unstyled">
										<li><a href="#">Invite Friends</a></li>
										<li><a href="#">Trust & Safety</a></li>
									</ul>
								</div>
								<div className="col-xs-6 mb-20 col-sm-3 col-md-2 footers-five">
									<div className="social-icons"> 
											<a href="https://www.facebook.com/"><i id="social-fb" className="fa fa-instagram fa-lg social"></i></a>
											<a href="https://twitter.com/"><i id="social-tw" className="fa fa-youtube-play fa-lg social"></i></a>
											<a href="https://plus.google.com/"><i id="social-gp" className="fa fa-facebook fa-lg social"></i></a>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section className="copyright border">
						<div className="container">
							<div className="row text-center">
								<div className="col-md-12 pt-3">
									<p className="text-muted pull-left">© 2019 Stinson Beach Property Management LLC. All rights reserved</p>
									<p className="pull-right"><a href="#">Terms </a> <a href="#">Privacy</a>  <a href="#"> Site map</a></p> 
								</div>
							</div>
						</div>
					</section>
				</footer>
			</div>
    );
  }  
}

export default Footer;
