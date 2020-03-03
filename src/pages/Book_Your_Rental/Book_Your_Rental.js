import React, { Component } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {
  NavLink,
} from "react-router-dom";
import { connect } from "react-redux";
import FilterOptions from "./FilterOptions/FilterOptions";
import ListingWindow from "./ListingsWindow/ListingWindow";

class Book_Your_Rental extends Component {

  render() {
    console.log(this.props);
    const { units } = this.props;
    return (
      <div>
        <Header />

        <FilterOptions/>
		<ListingWindow/>

        {/*<section className="book-rental-inner">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12">
                <div className="rent-title">
                  <h3 className="title text-left">Top Rated Places to Stay</h3>
                </div>
              </div>
              <NavLink to="/Sierra_11">
                <div className="col-md-4 col-lg-3">
                  <div className="card card-blog">
                    <div className="rent-card-body">
                      <div className="rent-flex">
                        <div className="author">
                          <img
                            className="author-picture "
                            src="images/property_images/11_Sierra/11-Sierra-Cover.png"
                            alt="..."
                          />
                        </div>
                        <div className="like">
                          <span className="text-left">Lisa Levin</span>
                          <a href="javascript:;" className="pull-right">
                            <i className="fa fa-star mr-2"></i>
                            <span className="small">
                              <strong>4.92</strong>(142)
                            </span>{" "}
                          </a>
                        </div>
                      </div>
                      <p>Charming Stinson Beach 1Bd+Den Cottage</p>
                      <p>
                        <strong>$179</strong> / night
                      </p>
                    </div>
                  </div>
                </div>
              </NavLink>
              <NavLink to="/Mouse_Hole">
                <div className="col-md-4 col-lg-3">
                  <div className="card card-blog">
                    <div className="rent-card-body">
                      <div className="rent-flex">
                        <div className="author">
                          <img
                            className="author-picture "
                            src="images/property_images/Mouse_Hole/Mouse_Hole_02.jpg"
                            alt="..."
                          />
                        </div>
                        <div className="like">
                          <span className="text-left">Kathleen Hurley</span>
                          <a href="javascript:;" className="pull-right">
                            <i className="fa fa-star mr-2"></i>
                            <span className="small">
                              <strong>4.89</strong>(40)
                            </span>{" "}
                          </a>
                        </div>
                      </div>
                      <p>Cute & Colourful Oceanside Cottage w Garden</p>
                      <p>
                        <strong>$131</strong> / night
                      </p>
                    </div>
                  </div>
                </div>
              </NavLink>
              <NavLink to="/Casita_Azul">
                <div className="col-md-4 col-lg-3">
                  <div className="card card-blog">
                    <div className="rent-card-body">
                      <div className="rent-flex">
                        <div className="author">
                          <img
                            className="author-picture "
                            src="images/property_images/Casita_Azul/Casita_Azul_22.jpg"
                            alt="..."
                          />
                        </div>
                        <div className="like">
                          <span className="text-left">Kathleen Hurley</span>
                          <a href="javascript:;" className="pull-right">
                            <i className="fa fa-star mr-2"></i>
                            <span className="small">
                              <strong>4.92</strong>(39)
                            </span>{" "}
                          </a>
                        </div>
                      </div>
                      <p>Stinson Beach Vibe - Cheerful Cottage w Garden</p>
                      <p>
                        <strong>$140</strong> / night
                      </p>
                    </div>
                  </div>
                </div>
              </NavLink>
              <NavLink to="/La_Playa">
                <div className="col-md-4 col-lg-3">
                  <div className="card card-blog">
                    <div className="rent-card-body">
                      <div className="rent-flex">
                        <div className="author">
                          <img
                            className="author-picture "
                            src="images//property_images/La_Playa/banner.jpg"
                            alt="..."
                          />
                        </div>
                        <div className="like">
                          <span className="text-left">Jeff Finci</span>
                          <a href="javascript:;" className="pull-right">
                            <i className="fa fa-star mr-2"></i>
                            <span className="small">
                              <strong>5.0</strong>(19)
                            </span>{" "}
                          </a>
                        </div>
                      </div>
                      <p>Comfortable updated vintage beach house</p>
                      <p>
                        <strong>$625</strong> / night
                      </p>
                    </div>
                  </div>
                </div>
              </NavLink>
              <div class="col-md-12">
                <br />
              </div>
              <NavLink to="/La_Sirena">
                <div className="col-md-4 col-lg-3">
                  <div className="card card-blog">
                    <div className="rent-card-body">
                      <div className="rent-flex">
                        <div className="author">
                          <img
                            className="author-picture "
                            src="images/property_images/La_Sirena/banner.jpg"
                            alt="..."
                          />
                        </div>
                        <div className="like">
                          <span className="text-left">Jeff Finci</span>
                          <a href="javascript:;" className="pull-right">
                            <i className="fa fa-star mr-2"></i>
                            <span className="small">
                              <strong>4.96</strong>(57)
                            </span>{" "}
                          </a>
                        </div>
                      </div>
                      <p>Oceanfront Apartment in Stinson Beach</p>
                      <p>
                        <strong>$225</strong> / night
                      </p>
                    </div>
                  </div>
                </div>
              </NavLink>
              <NavLink to="/La_Paz">
                <div className="col-md-4 col-lg-3">
                  <div className="card card-blog">
                    <div className="rent-card-body">
                      <div className="rent-flex">
                        <div className="author">
                          <img
                            className="author-picture "
                            src="images/property_images/La_Paz/banner.jpg"
                            alt="..."
                          />
                        </div>
                        <div className="like">
                          <span className="text-left">Jeff Finci</span>
                          <a href="javascript:;" className="pull-right">
                            <i className="fa fa-star mr-2"></i>
                            <span className="small">
                              <strong>4.94</strong>(115)
                            </span>{" "}
                          </a>
                        </div>
                      </div>
                      <p>Relax & Enjoy an Oceanfront Getaway - La Paz</p>
                      <p>
                        <strong>$225</strong> / night
                      </p>
                    </div>
                  </div>
                </div>
              </NavLink>
              <NavLink to="/Mermaid_View">
                <div className="col-md-4 col-lg-3">
                  <div className="card card-blog">
                    <div className="rent-card-body">
                      <div className="rent-flex">
                        <div className="author">
                          <img
                            className="author-picture "
                            src="images/property_images/Mermaid_View/banner.jpg"
                            alt="..."
                          />
                        </div>
                        <div className="like">
                          <span className="text-left">Jeff Finci</span>
                          <a href="javascript:;" className="pull-right">
                            <i className="fa fa-star mr-2"></i>
                            <span className="small">
                              <strong>4.6</strong>(50)
                            </span>{" "}
                          </a>
                        </div>
                      </div>
                      <p>Delightful Oceanside Cottage w Private Beach Lot</p>
                      <p>
                        <strong>$303</strong> / night
                      </p>
                    </div>
                  </div>
                </div>
              </NavLink>
              <NavLink to="/Pradero_27">
                <div className="col-md-4 col-lg-3">
                  <div className="card card-blog">
                    <div className="rent-card-body">
                      <div className="rent-flex">
                        <div className="author">
                          <img
                            className="author-picture "
                            src="images/property_images/27_Pradero/banner.jpg"
                            alt="..."
                          />
                        </div>
                        <div className="like">
                          <span className="text-left">Jeff Finci</span>
                          <a href="javascript:;" className="pull-right">
                            <i className="fa fa-star mr-2"></i>
                            <span className="small">
                              <strong>4.60</strong>(30)
                            </span>{" "}
                          </a>
                        </div>
                      </div>
                      <p>Handsome Beach Cottage w Outdoors Lounge</p>
                      <p>
                        <strong>$225</strong> / night
                      </p>
                    </div>
                  </div>
                </div>
              </NavLink>
              <NavLink to="/Agua_Verde">
                <div className="col-md-4 col-lg-3">
                  <div className="card card-blog">
                    <div className="rent-card-body">
                      <div className="rent-flex">
                        <div className="author">
                          <img
                            className="author-picture "
                            src="images/property_images/Agua_Verde/Aqua_Verde-4.jpg"
                            alt="..."
                          />
                        </div>
                        <div className="like">
                          <span className="text-left">Colby Gilbert</span>
                          <a href="javascript:;" className="pull-right">
                            <i className="fa fa-star mr-2"></i>
                            <span className="small">
                              <strong>5.0</strong>(13)
                            </span>{" "}
                          </a>
                        </div>
                      </div>
                      <p>Playful Oceanside Studio w Hot Tub</p>
                      <p>
                        <strong>$155</strong> / night
                      </p>
                    </div>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="row">
						<div className="col-sm-12">
							<div className="c-footer mtb-15">
								<a href="#">Show more ></a>
							</div>
					   </div>
					</div>
          </div>
        </section>*/}
        <br />
        <br />
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
        <Footer />
      </div>
    );
  }
}


export default Book_Your_Rental;