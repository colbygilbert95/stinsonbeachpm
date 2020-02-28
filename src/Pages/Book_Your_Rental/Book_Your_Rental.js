import React, { Component } from 'react';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import { BrowserRouter, Route, NavLink, HashRouter, Switch } from "react-router-dom";

class Book_Your_Rental extends Component {
	render() {
		return (
			<div>
				<Header />
				<section className="book-your--top">
					<div className="container-fluid">
						<div className="row">
							<div className="col-sm-9">
								<ul className="single-post-link mt-0">
									<li><a href="#">Date</a></li>
									<li><a href="#">Guests</a></li>
									<li><a href="#">Price</a></li>
									<li><a href="#">Type of Place</a></li>
									<li><a href="#">More Filters</a></li>
								</ul>
							</div>
							<div className="col-sm-3">
								<div className="Show-Map-btn">
									<span>Show Map</span>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="book-rental-inner">
					<div className="container-fluid">
						<div className="row">
							<div className="col-sm-12">
								<div className="rent-title">
									<h3>Top Rated Places to Stay</h3>
								</div>
							</div>
						</div>
						<div className="flex-parent">
							<div className="flex-wrapper">
								<div className="max-w-250">
									<NavLink to="/Sierra_11">
										<div className="card card-blog">
											<div className="rent-card-body">
												<div className="rent-flex">
													<div className="author">
														<img className="author-picture " src="images/property_images/11_Sierra/11-Sierra-Cover.png" alt="..." />
													</div>
													<div className="like">
														<a href="javascript:;" className="pull-right">
															<i className="fa fa-star mr-2"></i>
															<span className="small"><strong>4.92</strong>(142)</span> </a>
													</div>
												</div>
												<p>Charming Stinson Beach 1Bd+Den Cottage</p>
												<p><strong>$179</strong> / night</p>
											</div>
										</div>
									</NavLink>
								</div>
								<div className="max-w-250">
									<NavLink to="/Mouse_Hole">
										<div className="card card-blog">
											<div className="rent-card-body">
												<div className="rent-flex">
													<div className="author">
														<img className="author-picture " src="images/property_images/Mouse_Hole/Mouse_Hole_02.jpg" alt="..." />
													</div>
													<div className="like">
														<a href="javascript:;" className="pull-right">
															<i className="fa fa-star mr-2"></i>
															<span className="small"><strong>4.89</strong>(40)</span> </a>
													</div>
												</div>
												<p>Cute & Colourful Oceanside Cottage w Garden</p>
												<p><strong>$131</strong> / night</p>
											</div>
										</div>
									</NavLink>
								</div>
								<div className="max-w-250">
									<NavLink to="/Casita_Azul">
										<div className="card card-blog">
											<div className="rent-card-body">
												<div className="rent-flex">
													<div className="author">
														<img className="author-picture " src="images/property_images/Casita_Azul/Casita_Azul_22.jpg" alt="..." />
													</div>
													<div className="like">
														{/* <span className="text-left">Kathleen Hurley</span> */}
														<a href="javascript:;" className="pull-right">
															<i className="fa fa-star mr-2"></i>
															<span className="small"><strong>4.92</strong>(39)</span> </a>
													</div>
												</div>
												<p>Stinson Beach Vibe - Cheerful Cottage w Garden</p>
												<p><strong>$140</strong> / night</p>
											</div>
										</div>
									</NavLink>
								</div>
								<div className="max-w-250">
									<NavLink to="/La_Playa">
										<div className="card card-blog">
											<div className="rent-card-body">
												<div className="rent-flex">
													<div className="author">
														<img className="author-picture " src="images//property_images/La_Playa/banner.jpg" alt="..." />
													</div>
													<div className="like">
														<span className="text-left">Jeff Finci</span>
														<a href="javascript:;" className="pull-right">
															<i className="fa fa-star mr-2"></i>
															<span className="small"><strong>5.0</strong>(19)</span> </a>
													</div>
												</div>
												<p>Comfortable updated vintage beach house</p>
												<p><strong>$625</strong> / night</p>
											</div>
										</div>
									</NavLink>
								</div>
								<div className="max-w-250">
									<NavLink to="/La_Sirena">
										<div className="card card-blog">
											<div className="rent-card-body">
												<div className="rent-flex">
													<div className="author">
														<img className="author-picture " src="images/property_images/La_Sirena/banner.jpg" alt="..." />
													</div>
													<div className="like">
														{/* <span className="text-left">Jeff Finci</span> */}
														<a href="javascript:;" className="pull-right">
															<i className="fa fa-star mr-2"></i>
															<span className="small"><strong>4.96</strong>(57)</span> </a>
													</div>
												</div>
												<p>Oceanfront Apartment in Stinson Beach</p>
												<p><strong>$225</strong> / night</p>
											</div>
										</div>
									</NavLink>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-sm-12">
								<div className="c-footer mtb-15">
									<a href="#">Show more ></a>
								</div>
							</div>
						</div>
					</div>
				</section>
				<br /><br />

				<Footer />

			</div>
		);
	}
}

export default Book_Your_Rental;
