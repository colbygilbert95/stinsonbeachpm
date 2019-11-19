import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink, HashRouter, Switch } from "react-router-dom";

const STYLE={
	infoLogo:{
		'width':'280px'
	}
}
export class Footer extends Component {
  render() {
    return (
		<div>
			<footer>
				<section class="footers bg-light pt-5 pb-3">
					<div class="container pt-5">
						<div class="row">
							<div class="col-xs-12 col-sm-6 col-md-4 footers-one">
								<div class="footers-logo">
									<NavLink to="/">
										<img src="images/footer-logo.png" alt="Logo" style={STYLE.infoLogo}/>
									</NavLink>
								</div>
							</div>
							<div class="col-xs-12 col-sm-6 col-md-2 footers-link-title">
								<h5>C o m p a n y </h5>
								<ul class="list-unstyled">
									<li><a href="#">Our Story</a></li>
									<li><a href="#">Carreers</a></li>
									<li><NavLink to="/Blog">Blog</NavLink></li>
									<li><a href="#">Help</a></li>
								</ul>
							</div>
							<div class="col-xs-12 col-sm-6 col-md-2 footers-link-title">
								<h5>H o m e o w n e r </h5>
								<ul class="list-unstyled">
									<li><a href="#">Why Use A Manager</a></li>
									<li><a href="#">Refer Homeowners</a></li>
									<li><a href="#">Revenue Guarantee</a></li>
									<li><a href="#">Hospitality Standards</a></li>
								</ul>
							</div>
							<div class="col-xs-12 col-sm-6 col-md-2 footers-link-title">
								<h5>G u e s t </h5>
								<ul class="list-unstyled">
									<li><a href="#">Invite Friends</a></li>
									<li><a href="#">Trust & Safety</a></li>
								</ul>
							</div>
							<div class="col-xs-12 col-sm-6 col-md-2 footers-five">
								<div class="social-icons"> 
                                    <a href="https://www.facebook.com/"><i id="social-fb" class="fa fa-instagram fa-2x social"></i></a>
                                    <a href="https://twitter.com/"><i id="social-tw" class="fa fa-youtube-play fa-2x social"></i></a>
                                    <a href="https://plus.google.com/"><i id="social-gp" class="fa fa-facebook fa-2x social"></i></a>
                                </div>
							</div>
						</div>
					</div>
				</section>
				<section class="copyright border">
					<div class="container">
						<div class="row text-center">
							<div class="col-md-12 pt-3">
								<p class="text-muted pull-left">© 2019 Stinson Beach Property Management LLC. All rights reserved</p>
								<p class="pull-right"><a href="#">Terms </a> <a href="#">Privacy</a>  <a href="#"> Site map</a></p> 
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
