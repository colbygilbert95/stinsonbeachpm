import React, { Component } from 'react';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import { BrowserRouter, Route, NavLink, HashRouter, Switch } from "react-router-dom";
//const { FaIcon, FaStack } = require('react-fa-icon');

class Relax_And_Enjoy_an_Oceanfront_Getaway_La_Paz extends Component {
	render() {

		return (
			<div>

				<Header />

				<section className="check-availability">
					<div className="container-fluid">
						<div className="row">
							<div className="col-sm-4">
								<div className="beach-box border-rds">
									<h1>Charming‌ ‌Stinson‌ ‌Beach‌ ‌1Bd+Den‌ ‌Cottage‌ </h1>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="beach-img-box">
									<img src="images/property_images/11_Sierra/11-Sierra-Cover.png" className="border-rds" height="615" />
								</div>
							</div>
							<div className="col-sm-2">
								<div className="row">
									<div className="col-sm-12 mt-60">
										<div className="beach-img-box">
											<img src="images/property_images/11_Sierra/11-Sierra-Picture1.jpg" className="border-rds side_image" />
										</div>
									</div>
									<div className="col-sm-12 mt-60">
										<div className="beach-img-box">
											<img src="images/property_images/11_Sierra/11-Sierra-Picture2.jpg" className="border-rds side_image" />
										</div>
									</div>
									<div className="col-sm-12 mt-60">
										<div className="beach-img-box">
											<img src="images/property_images/11_Sierra/11-Sierra-Picture3.jpg" className="border-rds side_image" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="check-availability-second mt-15">
					<div className="container-fluid">
						<div className="row row_padding py-5">
							<div className="col-sm-8">
								<div className="bed-list">
									<div className="bed-inner">
										<ul>
											<li>5 guests</li>
											<li>1 Bedrooms</li>
											<li>3 Beds</li>
											<li>1 Baths</li>
										</ul>
									</div>
									<p>NOTE : Construction next door to my property is scheduled to start in October. I am happy to refund $50 per day that noise from this project affects your stay but want all potential guests to be aware of this issue prior booking.</p>
									<p>Relaxing refuge set on a lush hillside in the quiet seaside town of Stinoson Beach. Feel trensported by the suthentic Japanese design aesthetic and tranquil outdoor shower and soaking tub. Indulge in treetop ocean views from the comfort of a queen bed, and watch the sun set from the privacy of a wooden deck Walk only five minutes to three miles of perfect beach.</p>
								</div>
							</div>
							<div className="col-sm-4">
								<div className="mb-15"><strong>$145</strong> / night</div>
								<button className="learn-btn">Check Availability</button>
							</div>
						</div>

					</div>
				</section>
				<br /><br />

				<hr />
				<section className="property-services">
					<div className="container-fluid">
						<div className="row row_padding">
							<div className="col-sm-12">
								<div className="rent-title">
									<h3>Tour This Guesthouse</h3>
								</div>
							</div>
						</div>
						<div className="row row_padding">
							<div className="col-sm-3">
								<div className="property-services-box text-center">
									<div className="property-services-box-inner"></div>
									<p><strong>Full kitchen</strong></p>
								</div>
							</div>
							<div className="col-sm-3">
								<div className="property-services-box text-center">
									<div className="property-services-box-inner"></div>
									<p><strong>Full bathroom</strong></p>
								</div>
							</div>
							<div className="col-sm-3">
								<div className="property-services-box text-center">
									<div className="property-services-box-inner"></div>
									<p><strong>Half bathroom</strong></p>
								</div>
							</div>
							<div className="col-sm-3">
								<div className="property-services-box text-center">
									<div className="property-services-box-inner"></div>
									<p><strong>Entry</strong></p>
								</div>
							</div>
							<div className="col-sm-3">
								<div className="property-services-box text-center">
									<div className="property-services-box-inner"></div>
									<p><strong>Bedroom area</strong></p>
								</div>
							</div>
							<div className="col-sm-3">
								<div className="property-services-box text-center">
									<div className="property-services-box-inner"></div>
									<p><strong>Full kitchen</strong></p>
								</div>
							</div>
							<div className="col-sm-3">
								<div className="property-services-box text-center">
									<div className="property-services-box-inner"></div>
									<p><strong>Full kitchen</strong></p>
								</div>
							</div>
							<div className="col-sm-3">
								<div className="property-services-box text-center">
									<div className="property-services-box-inner bg-white">
										<div className="c-footer mtblr">
											<a href="#">Show more &gt;</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="property-services">
					<div className="container-fluid">
						<hr />
						<div className="row row_padding">
							<div className="col-sm-12">
								<div className="rent-title">
									<h3>Amenities</h3>
								</div>
							</div>
						</div>
						<div className="row row_padding">
							<div className="col-sm-3">
								<div className="property-services-box text-center">
									<div className="property-services-box-inner light-bg flex items-center">
										<img src="images/icons/Product_details/cooking.svg" width="94" height="94" />
									</div>
									<p><strong>Full kitchen</strong></p>
								</div>
							</div>
							<div className="col-sm-3">
								<div className="property-services-box text-center">
									<div className="property-services-box-inner light-bg flex items-center">
										<img src="images/icons/Product_details/008-wifi.svg" width="94" height="94" />
									</div>
									<p><strong>Wifi</strong></p>
								</div>
							</div>
							<div className="col-sm-3">
								<div className="property-services-box text-center">
									<div className="property-services-box-inner light-bg flex items-center">
										<img src="images/icons/Product_details/009-tv.svg" width="94" height="94" />
									</div>
									<p><strong>TV</strong></p>
								</div>
							</div>
							<div className="col-sm-3">
								<div className="property-services-box text-center">
									<div className="property-services-box-inner light-bg flex items-center">
										<img src="images/icons/Product_details/007-bathtub.svg" width="94" height="94" />
									</div>
									<p><strong>Bathroom essentials</strong></p>
								</div>
							</div>
							<div className="col-sm-3">
								<div className="property-services-box text-center">
									<div className="property-services-box-inner light-bg flex items-center">
										<img src="images/icons/Product_details/001-pillow.svg" width="94" height="94" />
									</div>
									<p><strong>Bedroom comforts</strong></p>
								</div>
							</div>
							<div className="col-sm-3">
								<div className="property-services-box text-center">
									<div className="property-services-box-inner light-bg flex items-center">
										<img src="images/icons/Product_details/002-coffee-maker.svg" width="94" height="94" />
									</div>
									<p><strong>Coffee maker</strong></p>
								</div>
							</div>
							<div className="col-sm-3">
								<div className="property-services-box text-center">
									<div className="property-services-box-inner light-bg flex items-center">
										<img src="images/icons/Product_details/004-parking.svg" width="94" height="94" />
									</div>
									<p><strong>Free street parking</strong></p>
								</div>
							</div>
							<div className="col-sm-3">
								<div className="property-services-box text-center">
									<div className="property-services-box-inner bg-white">
										<div className="c-footer mtblr">
											<a href="#">Show more &gt;</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="property-location">
					<div className="container-fluid">
						<hr />
						<div className="row row_padding">
							<div className="col-sm-12">
								<div className="rent-title">
									<h3>Location</h3>
								</div>
							</div>
						</div>
						<div className="row row_padding">
							<div className="col-sm-5">
								<div className="location-box border-rds">
									<p><strong>Stinson Beach, California, United States</strong></p>
									<p><strong>Distance from San Francisco International Airport </strong></p>
									<p className="font-style-italic">66 mins by car without traffic</p>
									<p>Stinson Beach is a quiet seaside town popular for its calm surf, smooth sand, and miles of mountain trails. The beach bungalow set on the hillside with wooden and stone stairs to arrive.
								Worth the trek, but if you have a bad knee, a tricky ankle or a hitch in your get-along, this is not the property for you</p>
									<p>Stinson Beach is a quiet seaside town popular for its calm surf, smooth sand, and miles of mountain trails. The beach bungalow set on the hillside with wooden and stone stairs to arrive.
								Worth the trek, but if you have a bad knee, a tricky ankle or a hitch in your get-along, this is not the property for you.</p>
								</div>
							</div>
							<div className="col-sm-7">
								<div className="property-location-map">
									<img className="border-rds" src="images/map-2.png" />
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="property-location">
					<div className="container-fluid">
						<hr />
						<div className="row row_padding">
							<div className="col-sm-12">
								<div className="rent-title">
									<h3>Reviews</h3>
								</div>
							</div>
						</div>
						<div className="row row_padding">
							<div className="col-sm-6">
								<div className="reviews-box">
									<div className="reviews-img-box"></div>
									<div className="reviews-coment-box">
										<p>We have stayed in many different Airbnb’s and this was by far our favorite! It is so unique and special.
									It starts out with the adventurous stairway down to the private piece of heaven! We loved the room itself with the full thought out kitchen, but… </p>
										<p><strong>Sarah</strong></p>
										<p className="reviews-day">10 days ago</p>
									</div>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="reviews-box">
									<div className="reviews-img-box"></div>
									<div className="reviews-coment-box">
										<p>We have stayed in many different Airbnb’s and this was by far our favorite! It is so unique and special.
									It starts out with the adventurous stairway down to the private piece of heaven! We loved the room itself with the full thought out kitchen, but… </p>
										<p><strong>Sarah</strong></p>
										<p className="reviews-day">10 days ago</p>
									</div>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="reviews-box">
									<div className="reviews-img-box"></div>
									<div className="reviews-coment-box">
										<p>We have stayed in many different Airbnb’s and this was by far our favorite! It is so unique and special.
									It starts out with the adventurous stairway down to the private piece of heaven! We loved the room itself with the full thought out kitchen, but… </p>
										<p><strong>Sarah</strong></p>
										<p className="reviews-day">10 days ago</p>
									</div>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="reviews-box">
									<div className="reviews-img-box"></div>
									<div className="reviews-coment-box">
										<p>We have stayed in many different Airbnb’s and this was by far our favorite! It is so unique and special.
									It starts out with the adventurous stairway down to the private piece of heaven! We loved the room itself with the full thought out kitchen, but… </p>
										<p><strong>Sarah</strong></p>
										<p className="reviews-day">10 days ago</p>
									</div>
								</div>
							</div>
						</div>
						<div className="row row_padding">
							<div className="col-sm-12">
								<div className="c-footer mtb-15">
									<a href="#">Show all reviews &gt;</a>
								</div>
							</div>
						</div>
					</div>
				</section>
				<div className="availability">
					<div className="container-fluid">
						<hr />
						<div className="row row_padding">
							<div className="col-sm-12">
								<div className="rent-title">
									<h3>Availability</h3>
								</div>
							</div>
						</div>
						<div className="row row_padding">
							<div className="col-sm-8">
								<input type="text" id="datepicker" style={{ display: 'none' }} />

							</div>
							<div className="col-sm-4">
								<div class="input-group">
									<input type="text" class="form-control input-lg" placeholder="Check In" />
									<span class="input-group-btn" style={{ width: '0px' }}></span>
									<input type="text" class="form-control input-lg" style={{ marginLeft: '-1px' }} placeholder="Check Out" />
								</div>
								<div className="form-group mt-20">
									<select class="form-control">
										<option selected>Guests</option>
										<option value="1">1</option>
										<option value="2">2</option>
										<option value="3">3</option>
									</select>
								</div>
							</div>
						</div>
					</div>
				</div>
				<section className="meet-the-owner">
					<div className="container-fluid">
						<hr />
						<div className="row row_padding">
							<div className="col-sm-12">
								<div className="rent-title">
									<h3>Meet the Owner</h3>
								</div>
							</div>
						</div>
						<div className="row row_padding mb-40">
							<div className="col-sm-9">
								<div className="meet-box">
									<div className="row row_padding">
										<div className="col-sm-3">
											<div className="meet-img-box"></div>
										</div>
										<div className="col-sm-9">
											<div className="meet-coment">
												<p className="mtb-15"><strong>Hi, Iʼm Stinson,</strong></p>
												<p>Stinson Beach is a quiet seaside town popular for its calm surf, smooth sand, and miles of mountain trails. The beach bungalow set on the hillside with wooden and stone stairs to arrive. Worth the trek, but if you have a bad knee, a tricky ankle or a hitch in your get-along, this is not the property for you. </p>
												<p>Stinson Beach is a quiet seaside town popular for its calm surf, smooth sand, and miles of mountain trails. The beach bungalow set on the hillside with wooden and stone stairs to arrive. Worth the trek, but if you have a bad knee, a tricky ankle or a hitch in your get-along, this is not the property for you. </p>
												<p>Stinson Beach is a quiet seaside town popular for its calm surf, smooth sand, and miles of mountain trails. The beach bungalow set on the hillside with wooden and stone stairs to arrive. Worth the trek, but if you have a bad knee, a tricky ankle or a hitch in your get-along, this is not the property for you.</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-sm-3">
								<div className="meet-box meet-box-contact">
									<p><strong>Joined:</strong> September 2014</p>
									<p><strong>Response rate:</strong>  100% </p>
									<p><strong>Response time:</strong>  within an hour</p>
									<p className="contact-with-owner-btn"><a href="#">Contact with Owner</a></p>
								</div>
							</div>
						</div>
						<hr />
						<div className="row row_padding mt-40">
							<div className="col-sm-6 border-right">
								<div className="rent-title mtt-0">
									<h3>House Rules</h3>
								</div>
								<p>The host has set some house rules, which you’ll be asked to agree to when you book.</p>
								<p><strong>Check-in:</strong> After 3PM</p>
								<p><strong>Checkout</strong> 11AM </p>
								<div className="c-footer mtb-15">
									<a href="#">Show all rules &gt;</a>
								</div>
							</div>
							<div className="col-sm-6 pr-40">
								<div className="rent-title mtt-0">
									<h3>Cancellation Policy</h3>
								</div>
								<p>Free cancellation for 48 hours. </p>
								<p>After that, cancel up to 5 days before check-in and get a full refund, minus the service fee</p>
								<div className="c-footer mtb-15">
									<a href="#">Show all policy &gt;</a>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="book-rental-inner mb-70">
					<div className="container-fluid">
						<hr />
						<div className="row row_padding">
							<div className="col-sm-12">
								<div className="rent-title">
									<h3>Other Places to Stay</h3>
								</div>
							</div>
							<div className="col-md-4 col-lg-3">
								<div className="card card-blog">
									<div className="rent-card-body">
										<div className="rent-flex">
											<div className="author">
												<img className="author-picture " src="images/bed.jpg" alt="..." />
											</div>
											<div className="like">
												<span className="text-left">Billie Ramos</span>
											</div>
										</div>
										<p>Amet animi autem commodi, debitis...</p>
										<p><strong>$145</strong> / night</p>
										<a href="#" className="pull-left">
											<i className="fa fa-star mr-2"></i>
											<span className="small"><strong>731</strong>(16)</span>
										</a>
									</div>
								</div>
							</div>
							<div className="col-md-4 col-lg-3">
								<div className="card card-blog">
									<div className="rent-card-body">
										<div className="rent-flex">
											<div className="author">
												<img className="author-picture " src="images/bed.jpg" alt="..." />
											</div>
											<div className="like">
												<span className="text-left">Billie Ramos</span>
											</div>
										</div>
										<p>Amet animi autem commodi, debitis...</p>
										<p><strong>$145</strong> / night</p>
										<a href="#" className="pull-left">
											<i className="fa fa-star mr-2"></i>
											<span className="small"><strong>731</strong>(16)</span> </a>
									</div>
								</div>
							</div>
							<div className="col-md-4 col-lg-3">
								<div className="card card-blog">
									<div className="rent-card-body">
										<div className="rent-flex">
											<div className="author">
												<img className="author-picture " src="images/bed.jpg" alt="..." />
											</div>
											<div className="like">
												<span className="text-left">Billie Ramos</span>
											</div>
										</div>
										<p>Amet animi autem commodi, debitis...</p>
										<p><strong>$145</strong> / night</p>
										<a href="#" className="pull-left">
											<i className="fa fa-star mr-2"></i>
											<span className="small"><strong>731</strong>(16)</span>
										</a>
									</div>
								</div>
							</div>
							<div className="col-md-4 col-lg-3">
								<div className="card card-blog">
									<div className="rent-card-body">
										<div className="rent-flex">
											<div className="author">
												<img className="author-picture " src="images/bed.jpg" alt="..." />
											</div>
											<div className="like">
												<span className="text-left">Billie Ramos</span>
											</div>
										</div>
										<p>Amet animi autem commodi, debitis...</p>
										<p><strong>$145</strong> / night</p>
										<a href="#" className="pull-left">
											<i className="fa fa-star mr-2"></i>
											<span className="small"><strong>731</strong>(16)</span>
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="row row_padding">
							<div className="col-sm-12">
								<div className="c-footer mtb-15">
									<a href="#">Show more &gt;</a>
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

export default Relax_And_Enjoy_an_Oceanfront_Getaway_La_Paz;
