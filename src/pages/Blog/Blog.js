import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink, HashRouter, Switch } from "react-router-dom";
import Header from '../Header/Header.js.js';
import Footer from '../Footer/Footer.js.js';

class Home extends Component {
	render() {
		
		return (
		<div>
			
			<Header/>
			
			<section class="blog-landing">
				<div class="container">
					<div class="row">
						<div class="col-sm-8">
						   <div class="blog-img">
							  <img src="images/beach.jpg"/>
						   </div>
						</div>
						<div class="col-sm-4">
							<div class="blog-side-box">
								<h3 class="blog-side-title">Featured Article Title</h3>
								<p>You begin with a text, you sculpt information, you chisel away what's not needed, you come to the point, make things clear, add value, you're a content person, you like words.</p>
								<p><NavLink to="/Single_blog">Read More</NavLink></p>
							</div>
						</div>	
					</div>
				</div>
			</section>
			<section class="popular">
				<div class="container">
					<div class="row">
						<div class="col-md-12">
							<div class="Popular-title">
								<h3>Popular</h3>
							</div>
						</div>
						<div class="col-md-4">
							<div class="card custom-card">
								<div class="card-img-top">
									<img src="images/villa.jpg"/>
								</div>
								<div class="card-body">
									<div class="c-title ">
										<h4 class="po-ttle">Blog title will be placed here for blog details informations</h4>
										<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout...</p>
									</div>
									<div class="c-footer">
										<NavLink to="/Single_blog">Read More</NavLink>
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-4">
							<div class="card custom-card">
								<div class="card-img-top">
									<img src="images/villa.jpg"/>
								</div>
								<div class="card-body">
									<div class="c-title ">
										<h4 class="po-ttle">Blog title will be placed here for blog details informations</h4>
										<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout...</p>
                                    </div>
									<div class="c-footer">
										<NavLink to="/Single_blog">Read More</NavLink>
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-4">
							<div class="card custom-card">
								<div class="card-img-top">
									<img src="images/villa.jpg"/>
								</div>
								<div class="card-body">
									<div class="c-title ">
										<h4 class="po-ttle">Blog title will be placed here for
										   blog details informations</h4>
										<p>It is a long established fact that a reader will be
											distracted by the readable content of a page
											when looking at its layout...</p>
									</div>
									<div class="c-footer">
										<NavLink to="/Single_blog">Read More</NavLink>
									</div>
								</div>
							</div>	
						</div>
					</div>
				</div>
			</section>
			<section class="Recent">
				<div class="container">
					<div class="row">
						<div class="col-md-12">
							<div class="Popular-title">
								<h3>Recent</h3>
							</div>
						</div>
						<div class="col-md-4">
							<div class="card custom-card">
								<div class="card-img-top">
								   
									 <img src="images/villa.jpg"/>
								</div>
								<div class="card-body">
									<div class="c-title ">
									   <h4 class="po-ttle">Blog title will be placed here for
										   blog details informations</h4>
									   <p>It is a long established fact that a reader will be
										   distracted by the readable content of a page
										   when looking at its layout...</p>
									</div>
									<div class="c-footer">
									   <NavLink to="/Single_blog">Read More</NavLink>
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-4">
							<div class="card custom-card">
								<div class="card-img-top">
								   
									 <img src="images/villa.jpg"/>
								</div>
								<div class="card-body">
									<div class="c-title ">
										<h4 class="po-ttle">Blog title will be placed here for
											  blog details informations</h4>
										  <p>It is a long established fact that a reader will be
											  distracted by the readable content of a page
											  when looking at its layout...</p>
											</div>
									<div class="c-footer">
									   <NavLink to="/Single_blog">Read More</NavLink>
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-4">
							<div class="card custom-card">
								<div class="card-img-top">
								   
									<img src="images/villa.jpg"/>
								</div>
								<div class="card-body">
									<div class="c-title ">
										<h4 class="po-ttle">Blog title will be placed here for
											  blog details informations</h4>
										  <p>It is a long established fact that a reader will be
											  distracted by the readable content of a page
											  when looking at its layout...</p>
										   </div>
									<div class="c-footer">
									   <NavLink to="/Single_blog">Read More</NavLink>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			
			<Footer/>
			
		</div>
		);
	}
}

export default Home;
