import React, { Component } from 'react';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import { BrowserRouter, Route, NavLink, HashRouter, Switch } from "react-router-dom";

class Book_Your_Rental extends Component {
	render() {
		
		return (
		<div>
			
			<Header/>
			
			<section className="book-your--top">
				<div className="container-fluid">
					<div className="row">
						<div className="col-sm-9">
							<ul className="single-post-link mt-0">
							   <li><a href="#">Date</a></li>
							   <li><a href="#">Guests</a></li>
							   <li><a href="#">Price</a></li>
							   <li><a href="#">Type of Place</a></li>
							   <li className="active"><a href="#">More Filters</a></li>
							   
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
								<h3 className="title text-left">Top Rated Places to Stay</h3>
							</div>
						</div>
						<div className="col-md-4 col-lg-3">
							<div className="card card-blog">
								<div className="rent-card-body">
									<div className="rent-flex">
										<div className="author">
										   <img className="author-picture " src="images/properties_images/11_Sierra/11-Sierra-Cover.png" alt="..."/>
										</div>
										<div className="like">
											<span className="text-left">Lisa Levin</span>
											<a href="javascript:;" className="pull-right">
											<i className="fa fa-star mr-2"></i> 
											<span className="small"><strong>731</strong>(16)</span> </a>
										</div>
									</div>
									<p>Charming Stinson Beach 1Bd+Den Cottage</p>
									<p><strong>$145</strong> / night</p>
								</div>
							</div>
						</div>
						<div className="col-md-4 col-lg-3">
							<div className="card card-blog">
								<div className="rent-card-body">
									<div className="rent-flex">
										<div className="author">
											<img className="author-picture " src="images/properties_images/Mouse_Hole/Mouse_Hole_02.jpg" alt="..."/>
										</div>
										<div className="like">
											<span className="text-left">Kathleen Hurley</span>
											<a href="javascript:;" className="pull-right">
											<i className="fa fa-star mr-2"></i> 
											<span className="small"><strong>731</strong>(16)</span> </a>
										</div>
									</div>
									<p>Cute & Colourful Oceanside Cottage w Garden</p>
									<p><strong>$145</strong> / night</p>
								</div>
							</div>
						</div>
						<div className="col-md-4 col-lg-3">
							<div className="card card-blog">
								<div className="rent-card-body">
									<div className="rent-flex">
										<div className="author">
											<img className="author-picture " src="images/properties_images/Casita_Azul/Casita_Azul_22.jpg" alt="..."/>
										</div>
										<div className="like">
											<span className="text-left">Kathleen Hurley</span>
											<a href="javascript:;" className="pull-right">
											<i className="fa fa-star mr-2"></i> 
											<span className="small"><strong>731</strong>(16)</span> </a>
										</div>
									</div>
									<p>Stinson Beach Vibe - Cheerful Cottage w Garden</p>
									<p><strong>$145</strong> / night</p>
								</div>
							</div>
						</div>
						<div className="col-md-4 col-lg-3">
							<div className="card card-blog">
								<div className="rent-card-body">
									<div className="rent-flex">
										<div className="author">
											<img className="author-picture " src="images//properties_images/Comfortable/banner.jpg" alt="..."/>
										</div>
										<div className="like">
											<span className="text-left">Jeff Finci</span>
											<a href="javascript:;" className="pull-right">
											<i className="fa fa-star mr-2"></i> 
											<span className="small"><strong>731</strong>(16)</span> </a>
										</div>
									</div>
									<p>Comfortable updated vintage beach house</p>
									<p><strong>$145</strong> / night</p>
								</div>
							</div>
                        </div>
						<div class="col-md-12"><br/></div>
						<div className="col-md-4 col-lg-3">
							<div className="card card-blog">
								<div className="rent-card-body">
									<div className="rent-flex">
										<div className="author">
											<img className="author-picture " src="images/properties_images/Oceanfront/banner.jpg" alt="..."/>
										</div>
										<div className="like">
											<span className="text-left">Jeff Finci</span>
											<a href="javascript:;" className="pull-right">
											<i className="fa fa-star mr-2"></i> 
											<span className="small"><strong>731</strong>(16)</span> </a>
										</div>
									</div>
									<p>Oceanfront Apartment in Stinson Beach</p>
									<p><strong>$145</strong> / night</p>
								</div>
							</div>
						</div>
						<div className="col-md-4 col-lg-3">
							<div className="card card-blog">
								<div className="rent-card-body">
									<div className="rent-flex">
										<div className="author">
											<img className="author-picture " src="images/properties_images/Relax/banner.jpg" alt="..."/>
										</div>
										<div className="like">
											<span className="text-left">Jeff Finci</span>
											<a href="javascript:;" className="pull-right">
											<i className="fa fa-star mr-2"></i> 
											<span className="small"><strong>731</strong>(16)</span> </a>
										</div>
									</div>
									<p>Relax & Enjoy an Oceanfront Getaway - La Paz</p>
									<p><strong>$145</strong> / night</p>
								</div>
							</div>
						</div>
					</div>
					{/*<div className="row">
						<div className="col-sm-12">
							<div className="c-footer mtb-15">
								<a href="#">Show more ></a>
							</div>
					   </div>
					</div>*/}
				</div>
			</section>
			<br/><br/>
			{/*
			<section className="book-rental-inner">
				<div className="container-fluid">
					<div className="row">		
						<div className="col-sm-12">
							<div className="rent-title">
								<h3 className="title text-left">Places to Stay with Pets</h3>
							</div>
						</div>
						<div className="col-md-4 col-lg-3">
							<div className="card card-blog">
								<div className="rent-card-body">
									<div className="rent-flex">
										<div className="author">
											<img className="author-picture " src="images/bed.jpg" alt="..."/>
										</div>
										<div className="like">
											<span className="text-left">Billie Ramos</span>
											<a href="javascript:;" className="pull-right">
											<i className="fa fa-star mr-2"></i> 
											<span className="small"><strong>731</strong>(16)</span> </a>
										</div>
									</div>
									<p>Amet animi autem commodi, debitis...</p>
									<p><strong>$145</strong> / night</p>
								</div>
							</div>
						</div>
						<div className="col-md-4 col-lg-3">
							<div className="card card-blog">
								<div className="rent-card-body">
									<div className="rent-flex">
										<div className="author">
											<img className="author-picture " src="images/bed.jpg" alt="..."/>                             
										</div>
										<div className="like">
											<span className="text-left">Billie Ramos</span>
											<a href="javascript:;" className="pull-right">
											<i className="fa fa-star mr-2"></i> 
											<span className="small"><strong>731</strong>(16)</span> </a>
										</div>
									</div>
									<p>Amet animi autem commodi, debitis...</p>
									<p><strong>$145</strong> / night</p>
								</div>
							</div>
						</div>
						<div className="col-md-4 col-lg-3">
							<div className="card card-blog">
								<div className="rent-card-body">
									<div className="rent-flex">
										<div className="author">
											<img className="author-picture " src="images/bed.jpg" alt="..."/>
										</div>
										<div className="like">
											<span className="text-left">Billie Ramos</span>
											<a href="javascript:;" className="pull-right">
											<i className="fa fa-star mr-2"></i> 
											<span className="small"><strong>731</strong>(16)</span> </a>
										</div>
									</div>
									<p>Amet animi autem commodi, debitis...</p>
									<p><strong>$145</strong> / night</p>
								</div>
							</div>
                        </div>
						<div className="col-md-4 col-lg-3">
                            <div className="card card-blog">
								<div className="rent-card-body">
									<div className="rent-flex">
										<div className="author">
											<img className="author-picture " src="images/bed.jpg" alt="..."/>
										</div>
										<div className="like">
											<span className="text-left">Billie Ramos</span>
											<a href="javascript:;" className="pull-right">
											<i className="fa fa-star mr-2"></i> 
											<span className="small"><strong>731</strong>(16)</span> </a>
										</div>
									</div>
									<p>Amet animi autem commodi, debitis...</p>
									<p><strong>$145</strong> / night</p>
								</div>
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
			<section className="book-rental-inner mb-70">
				<div className="container-fluid">
					<div className="row">
						<div className="col-sm-12">
							<div className="rent-title">
								<h3 className="title text-left">Places to Stay in Stinson Beach</h3>
							</div>
						</div>
						<div className="col-md-4 col-lg-3">
							<div className="card card-blog">
								<div className="rent-card-body">
									<div className="rent-flex">
										<div className="author">
											<img className="author-picture " src="images/bed.jpg" alt="..."/>
										</div>
										<div className="like">
											<span className="text-left">Billie Ramos</span>
											<a href="javascript:;" className="pull-right">
											<i className="fa fa-star mr-2"></i> 
											<span className="small"><strong>731</strong>(16)</span> </a>
										</div>
									</div>
									<p>Amet animi autem commodi, debitis...</p>
									<p><strong>$145</strong> / night</p>
								</div>
							</div>
						</div>
						<div className="col-md-4 col-lg-3">
							<div className="card card-blog">
								<div className="rent-card-body">
									<div className="rent-flex">
										<div className="author">
											<img className="author-picture " src="images/bed.jpg" alt="..."/>
										</div>
										<div className="like">
											<span className="text-left">Billie Ramos</span>
											<a href="javascript:;" className="pull-right">
											<i className="fa fa-star mr-2"></i> 
											<span className="small"><strong>731</strong>(16)</span> </a>
										</div>
									</div>
									<p>Amet animi autem commodi, debitis...</p>
									<p><strong>$145</strong> / night</p>
								</div>
							</div>
						</div>
						<div className="col-md-4 col-lg-3">
                            <div className="card card-blog">
								<div className="rent-card-body">
									<div className="rent-flex">
										<div className="author">
											<img className="author-picture " src="images/bed.jpg" alt="..."/>
										</div>
										<div className="like">
											<span className="text-left">Billie Ramos</span>
											<a href="javascript:;" className="pull-right">
											<i className="fa fa-star mr-2"></i> 
											<span className="small"><strong>731</strong>(16)</span> </a>
										</div>
									</div>
									<p>Amet animi autem commodi, debitis...</p>
									<p><strong>$145</strong> / night</p>
								</div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-3">
                            <div className="card card-blog">
                                <div className="rent-card-body">
									<div className="rent-flex">
										<div className="author">
											<img className="author-picture " src="images/bed.jpg" alt="..."/>
										</div>
										<div className="like">
											<span className="text-left">Billie Ramos</span>
											<a href="javascript:;" className="pull-right">
											<i className="fa fa-star mr-2"></i> 
											<span className="small"><strong>731</strong>(16)</span> </a>
										</div>
									</div>
									<p>Amet animi autem commodi, debitis...</p>
									<p><strong>$145</strong> / night</p>
                                </div>
                            </div>
                        </div>
					</div>
					<div className="row mt-20">
						<div className="col-md-4 col-lg-3">
							<div className="card card-blog">
								<div className="rent-card-body">
									<div className="rent-flex">
										<div className="author">
											<img className="author-picture " src="images/bed.jpg" alt="..."/>
										</div>
										<div className="like">
											<span className="text-left">Billie Ramos</span>
											<a href="javascript:;" className="pull-right">
											<i className="fa fa-star mr-2"></i> 
											<span className="small"><strong>731</strong>(16)</span> </a>
										</div>
									</div>
									<p>Amet animi autem commodi, debitis...</p>
									<p><strong>$145</strong> / night</p>
								</div>
							</div>
						</div>
						<div className="col-md-4 col-lg-3">
							<div className="card card-blog">
								<div className="rent-card-body">
									<div className="rent-flex">
										<div className="author">
											<img className="author-picture " src="images/bed.jpg" alt="..."/>
										</div>
										<div className="like">
											<span className="text-left">Billie Ramos</span>
											<a href="javascript:;" className="pull-right">
											<i className="fa fa-star mr-2"></i> 
											<span className="small"><strong>731</strong>(16)</span> </a>
										</div>
									</div>
									<p>Amet animi autem commodi, debitis...</p>
									<p><strong>$145</strong> / night</p>
								</div>
							</div>
                        </div>
                        <div className="col-md-4 col-lg-3">
                            <div className="card card-blog">
                                <div className="rent-card-body">
									<div className="rent-flex">
										<div className="author">
											<img className="author-picture " src="images/bed.jpg" alt="..."/>
										</div>
										<div className="like">
											<span className="text-left">Billie Ramos</span>
											<a href="javascript:;" className="pull-right">
											<i className="fa fa-star mr-2"></i> 
											<span className="small"><strong>731</strong>(16)</span> </a>
										</div>
									</div>
									<p>Amet animi autem commodi, debitis...</p>
									<p><strong>$145</strong> / night</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-3">
                            <div className="card card-blog">
                                <div className="rent-card-body">
                                    <div className="rent-flex">
										<div className="author">
											<img className="author-picture " src="images/bed.jpg" alt="..."/>
                                        </div>
										<div className="like">
											<span className="text-left">Billie Ramos</span>
											<a href="javascript:;" className="pull-right">
											<i className="fa fa-star mr-2"></i> 
											<span className="small"><strong>731</strong>(16)</span> </a>
                                        </div>
                                    </div>
                                    <p>Amet animi autem commodi, debitis...</p>
                                    <p><strong>$145</strong> / night</p>
                                </div>
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
			*/}
			<Footer/>
			
		</div>
		);
	}
}

export default Book_Your_Rental;
