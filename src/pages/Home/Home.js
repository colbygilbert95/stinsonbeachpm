import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { NavLink } from "react-router-dom";
import Search_form from "../Form/Search_form";

class Home extends Component {
	render() {

		return (
			<div>

				<Header />

				<div className="main-banner">
					<div className="container">
						<div className="row flex justify-content-end py-5 pr-60">
							{<Search_form />}
						</div>
					</div>
				</div>
				<div class="earn-more">
					<h3>Earn $5,000 More Or We Pay You</h3>
				</div>
				<section className="why ptb">
					<div className="container custom-container">
						<div className="custom-row">
							<div className="row">
								<div className="col-sm-12 col-md-6 mt-15">
									<div className="custom-media-box">
										<div className="media">
											<h3>Why Stinson Beach Property Management ?</h3>
											<div className="cu-media-body">
												<div className="media-contant">
													<p>Our promise to you is to increase your revenue while freeing up your time.</p>
												</div>
											</div>
											<div className="cu-media-body">
												<div className="media-contant">
													<p>Stinson Beach Property Management operates exclusively 	in Stinson Beach, which allows for premium individualized care to maximize your property's revenue.</p>
												</div>
											</div>
											<div className="cu-media-body">
												<div className="media-contant">
													<p>We are the only property management company in Stinson Beach that advertises properties on Airbnb and VRBO. We handle all the back end work and taxes, so you can enjoy regular payouts.</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-sm-12 col-md-6 mt-15">
									<div className="client-result">
										<h3>Client Results</h3>
										<div className="break"></div>
										<div className="client mb-40">
											<p><strong>Client A: </strong>had a record year, <span className="italic-underline">earning $11,928 more than the previous year.</span> Their property was invited to Airbnb Plus, which on average, results in an additional 22% increase in income.</p>
										</div>
										<div className="client">
											<p><strong>Client B: </strong>before working with me was making, on average, $2,148 per month.  Now they are averaging $9,572 per month.  <span className="italic-underline">They will see an $89,093 increase in yearly revenue.</span></p>
										</div>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-sm-12">
									<div className="border-img text-center">
										<img src="images/border-icon.png" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="home-second">
					<div className="container custom-container">
						<div className="row">
							<div className="col-sm-12 col-md-4">
								<div className="home-inner-content">
									<h3 className="home-inner-title m0">1.</h3>
									<h3 className="home-inner-title mt0">Receive your action plan</h3>
									<p>Set up a meeting a Homeowner Advisor to receive a detailed action plan to take your property to the next level</p>
								</div>
							</div>
							<div className="col-sm-12 col-md-4">
								<div className="home-inner-content">
									<h3 className="home-inner-title m0">2</h3>
									<h3 className="home-inner-title mt0">We prepare your property</h3>
									<p>We put the plan motion and your property gets upgraded and integrated into our management systsm.</p>
								</div>
							</div>
							<div className="col-sm-12 col-md-4">
								<div className="home-inner-content">
									<h3 className="home-inner-title m0">3.</h3>
									<h3 className="home-inner-title mt0">Welcome your first guest</h3>
									<p>Once your property is live, qualified guests book and Homeowner payouts begin.</p>
								</div>
							</div>
						</div>
						<div className="row flex-center">
							<button className="learn-btn">Learn how to get started</button>
						</div>
						<div className="row">
							<div className="col-sm-12">
								<div className="border-img text-center">
									<img src="images/border-icon.png" />
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="home-second">
					<div className="container custom-container">
						<div className="row">
							<div className="col-sm-12">
								<div className="rent-title">
									<h3 className="title text-center">Earn more in 3 Steps</h3>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-sm-12 col-md-4">
								<div className="home-inner-content">
									<h3 className="home-inner-title">We protect homeowners</h3>
									<p>To keep you, your home , and you belongings safe and we protect you by investing in the property ourselves</p>
									<p>We install Smart Locks, Noise Monitors, Ensure Each Booking is covered with $1M USD accident and damage protection at no cost to  you.</p>
								</div>
							</div>
							<div className="col-sm-12 col-md-4">
								<div className="home-inner-content">
									<h3 className="home-inner-title">Guests are verified</h3>
									<p>We only allow kind, laid back guests, that can pass our bank-level ID screening to stay in your home. This catches bad actors before they can even make a booking.</p>
								</div>
							</div>
							<div className="col-sm-12 col-md-4">
								<div className="home-inner-content">
									<h3 className="home-inner-title">Authentic travel experiences</h3>
									<p>Everything we do for guests revolves around providing the consistency and service of a great hotel combined with the waemth and cheracter of the home. Happy repeat guests means more revenue for you.</p>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-sm-12">
								<div className="border-img text-center">
									<img src="images/border-icon.png" />
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-sm-12">
								<div className="rent-title">
									<h3 className="title text-center">Homeowner stories</h3>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-sm-6">
								<div className="home-box"></div>
							</div>
							<div className="col-sm-6">
								<div className="home-box-inner">
									<div className="home-side-img">
										<img src="images/quote.svg" />
									</div>
									<div className="home-box-content">
										<h1>There's no one way to host. You might be surprised by how much fun you have. "</h1>
										<p>Christelle, Phoenicia , NY</p>
										<p><a href="#">Learn their story</a></p>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-sm-12">
								<div className="border-img text-center">
									<img src="images/border-icon.png" />
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="ask-question">
					<div className="container custom-container">
						<div className="row">
							<div className="col-sm-12">
								<div className="rent-title">
									<h3 className="title text-center">Your questions answered</h3>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-sm-6">
								<div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
									<div className="panel panel-default">
										<div className="panel-heading" role="tab" id="headingOne">
											<h4 className="panel-title">
												<a role="button" className="custom-pl" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
													<i className="more-less glyphicon glyphicon-plus"></i>
													Will I have to worry about taxes?
											</a>
											</h4>
										</div>
										<div id="collapseOne" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
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
										<div className="panel-heading" role="tab" id="headingtwo">
											<h4 className="panel-title">
												<a role="button" className="custom-pl" data-toggle="collapse" data-parent="#accordion" href="#collapsetwo" aria-expanded="true" aria-controls="collapsetwo">
													<i className="more-less glyphicon glyphicon-plus"></i>
													Can I rent my own place?
											</a>
											</h4>
										</div>
										<div id="collapsetwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingtwo">
											<div className="panel-body">
												Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
										</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="row mt-30 mb-70">
							<div className="col-sm-12">
								<div className="redy-to-earn">
									<div className="redy-to-earn-img">
										<img src="images/redy-earn.jpg" />
									</div>
									<div className="redy-to-earn-text">
										<h1>Redy to Earn ?</h1>
										<p><a href="#">Get Started </a></p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<Footer />

			</div>
		);
	}
}

export default Home;
