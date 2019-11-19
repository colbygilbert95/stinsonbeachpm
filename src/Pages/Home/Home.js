import React, { Component } from 'react';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';

class Home extends Component {
	render() {
		
		return (
		<div>
			
			<Header/>
			
			<div className="main-banner">
				<div className="d-table">
					<div className="d-table-cell">
						<div className="container">
							<div className="row align-items-center">
								<div className="col-lg-5"></div>
								<div className="col-lg-4">
									<div className="get-appointment-form">
										<h3>Vacation Home Managment</h3>
										<p>Earn $5000 More Or We Pay You</p>
										<p className="mtb">
											<span className="pull-left">Revenue Guarantee</span>
											<span className="pull-right">
												<a href="#">Learn More</a>
											</span>
										</p>
										<form>
											<div className="form-group">
												<input type="text" className="form-control" id="your_name" placeholder="Your Name"/>
											</div>
											<div className="form-group">
												<input type="email" className="form-control" id="your_email" placeholder="Your Email"/>
											</div>
											<div className="form-group">
												<input type="text" className="form-control" id="phone_number" placeholder="Phone Number"/>
											</div>
											<div className="form-group">
												<input type="text" className="form-control" id="number" placeholder="Number Of List"/>
											</div>
											<div className="text-center">
												<button type="submit" className="btn btn-primary cu-btn">Back A Call</button>
											</div>
											<div className="form-footer">
												<p>Or Call: <span>415-209-5847</span></p>
											</div>
										</form>
									</div>
								</div>
								<div className="col-lg-3"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<section className="why ptb">
				<div className="container">
					<div className="custom-row">
						<div className="row">
							<div className="col-sm-12">
								<div className="custom-media-box">
									<div className="media ">
										<h3 className="title">Why Dipsea?</h3>
										<div className="cu-media-body">
											<div className="pull-left">
												<img src="images/t-icon.png"/>
											</div>
											<div className="media-contant">
												<p>We understand the challenges involved in managing rental properties and technicalities and optimization of Airbnb/VRBO listings.</p>
											</div>
										</div>
										<div className="cu-media-body">
											<div className="pull-left">
												<img src="images/t-icon.png"/>
											</div>
											<div className="media-contant">
												<p>The dirty secret of Airbnb/VRBO property management companies is the
														larger the company, the more watered-down the service.</p>
											</div>
										</div>
										<div className="cu-media-body">
											<div className="pull-left">
												<img src="images/t-icon.png"/>
											</div>
											<div className="media-contant">
												<p>Dipsea Property Management operates exclusively in Stinson Beach and Bolinas, which allows for premium individualized care to both the hosts and guests</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="full_service">
				<div className="container">
					<div className="row">
						<div className="col-sm-12">
							<div className="ser text-center">
								<h3 className="title cu-border">Full-Service Vacation Rental Management</h3>
							</div>
						</div>
						<div className="col-sm-12">
							<div className="ser-2 text-center">
								<p>15%-25% Of Nightly Rate</p>
							</div>
							<div id="myCarousel" className="carousel slide">
								<div className="carousel-inner">
									<div className="item active">
										<div className="row">
											<div className="col-sm-4">
												<div className="card">
													<div className="card-body text-center">
														<p>
															<img className=" img-fluid" src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_01.png" alt="card image"/>
														</p>
														<h4 className="card-title">Sunlimetech</h4>
														<p className="card-text">This is basic card with image on top, title, description and button.</p>
													</div>
												</div>
											</div>
											<div className="col-sm-4">
												<div className="card">
													<div className="card-body text-center">
														<p>
															<img className=" img-fluid" src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_01.png" alt="card image"/>
														</p>
														<h4 className="card-title">Sunlimetech</h4>
														<p className="card-text">This is basic card with image on top, title, description and button.</p>
													</div>
												</div>	
											</div>
											<div className="col-sm-4">
												<div className="card">
													<div className="card-body text-center">
														<p>
															<img className=" img-fluid" src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_01.png" alt="card image"/>
														</p>
														<h4 className="card-title">Sunlimetech</h4>
														<p className="card-text">This is basic card with image on top, title, description and button.</p>
													</div>
												</div>
											</div>
										</div>
										<div className="row">
											<div className="col-sm-4">
												<div className="card">
													<div className="card-body text-center">
														<p>
															<img className=" img-fluid" src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_01.png" alt="card image"/>
														</p>
														<h4 className="card-title">Sunlimetech</h4>
														<p className="card-text">This is basic card with image on top, title, description and button.</p>
													</div>
												</div>
											</div>
											<div className="col-sm-4">
												<div className="card">
													<div className="card-body text-center">
														<p>
															<img className=" img-fluid" src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_01.png" alt="card image"/>
														</p>
														<h4 className="card-title">Sunlimetech</h4>
														<p className="card-text">This is basic card with image on top, title, description and button.</p>
													</div>
												</div>
											</div>
											<div className="col-sm-4">
												<div className="card">
													<div className="card-body text-center">
														<p>
															<img className=" img-fluid" src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_01.png" alt="card image"/>
														</p>
														<h4 className="card-title">Sunlimetech</h4>
														<p className="card-text">This is basic card with image on top, title, description and button.</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<a className="left carousel-control" href="#myCarousel" data-slide="prev">‹</a>
								<a className="right carousel-control" href="#myCarousel" data-slide="next">›</a>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="testimonial">
				<div className="container">
					<div className="row">
						<div className="col-sm-12">
						<h2>What <b>our customers</b> are saying</h2>
						<div id="myCarousel" className="carousel slide" data-ride="carousel">
							<ol className="carousel-indicators">
								<li data-target="#myCarousel" data-slide-to="0" className="active"></li>
								<li data-target="#myCarousel" data-slide-to="1"></li>
								<li data-target="#myCarousel" data-slide-to="2"></li>
							</ol>
							<div className="carousel-inner">
								<div className="item carousel-item active">
									<div className="row">
										<div className="col-sm-12">
											<div className="media">
												<div className="media-left d-flex mr-3">
													<a href="#">
														<img src="/examples/images/clients/1.jpg" alt=""/>
													</a>
												</div>
												<div className="media-body">
												   <div className="testimonial">
													  <p>Lorem ipsum dolor sit amet, consec adipiscing elit. Nam eusem scelerisque tempor, varius quam luctus dui. Mauris magna metus nec.</p>
													  <p className="overview"><b>Paula Wilson</b>, Media Analyst</p>
												   </div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="item carousel-item">
									<div className="row">
										<div className="col-sm-12">
											<div className="media">
												<div className="media-left d-flex mr-3">
													<a href="#">
														<img src="/examples/images/clients/3.jpg" alt=""/>
													</a>
												</div>
												<div className="media-body">
													<div className="testimonial">
														<p>Lorem ipsum dolor sit amet, consec adipiscing elit. Nam eusem scelerisque tempor, varius quam luctus dui. Mauris magna metus nec.</p>
														<p className="overview"><b>Michael Holz</b>, Seo Analyst</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				</div>
			</section>
			<section className="ask-question">
				<div className="container">
					<div className="row">
						<div className="col-sm-6">
							<div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
								<div className="panel panel-default">
									<div className="panel-heading" role="tab" id="headingOne">
									   <h4 className="panel-title">
										  <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
										  <i className="more-less glyphicon glyphicon-plus"></i>
										  Collapsible Group Item #1
										  </a>
									   </h4>
									</div>
									<div id="collapseOne" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
									   <div className="panel-body">
										  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
									   </div>
									</div>
								</div>
								<div className="panel panel-default">
									<div className="panel-heading" role="tab" id="headingTwo">
									   <h4 className="panel-title">
										  <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
										  <i className="more-less glyphicon glyphicon-plus"></i>
										  Collapsible Group Item #2
										  </a>
									   </h4>
									</div>
									<div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
									   <div className="panel-body">
										  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
									   </div>
									</div>
								</div>
								<div className="panel panel-default">
									<div className="panel-heading" role="tab" id="headingThree">
									   <h4 className="panel-title">
										  <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
										  <i className="more-less glyphicon glyphicon-plus"></i>
										  Collapsible Group Item #3
										  </a>
									   </h4>
									</div>
									<div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
									   <div className="panel-body">
										  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
									   </div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-sm-6">
							<div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
								<div className="panel panel-default">
									<div className="panel-heading" role="tab" id="headingFourth">
									   <h4 className="panel-title">
										  <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFourth" aria-expanded="true" aria-controls="collapseFourth">
										  <i className="more-less glyphicon glyphicon-plus"></i>
										  Collapsible Group Item #1
										  </a>
									   </h4>
									</div>
									<div id="collapseFourth" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFourth">
									   <div className="panel-body">
										  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
									   </div>
									</div>
								</div>
								<div className="panel panel-default">
									<div className="panel-heading" role="tab" id="headingFive">
										<h4 className="panel-title">
											<a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
												<i className="more-less glyphicon glyphicon-plus"></i>
											  Collapsible Group Item #2
											</a>
									   </h4>
									</div>
									<div id="collapseFive" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFive">
									   <div className="panel-body">
										  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
									   </div>
									</div>
								</div>
								<div className="panel panel-default">
									<div className="panel-heading" role="tab" id="headingSix">
									   <h4 className="panel-title">
										  <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
										  <i className="more-less glyphicon glyphicon-plus"></i>
										  Collapsible Group Item #3
										  </a>
									   </h4>
									</div>
									<div id="collapseSix" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingSix">
									   <div className="panel-body">
										  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
									   </div>
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
