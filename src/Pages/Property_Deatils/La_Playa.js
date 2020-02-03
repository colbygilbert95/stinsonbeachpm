import React, { Component } from 'react';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import { BrowserRouter, Route, NavLink, HashRouter, Switch } from "react-router-dom";
//const { FaIcon, FaStack } = require('react-fa-icon');

class Comfortable_updated_vintage_beach_house extends Component {
	render() {
		
		return (
		<div>
			
			<Header/>
			
			<section className="check-availability">
				<div className="container-fluid">
					<div className="row">
						<div className="col-sm-4">
							<div className="beach-box border-rds">
								<h1>Comfortable updated vintage beach house</h1>
							</div>
						</div>
						<div className="col-sm-6">
							<div className="beach-img-box">
								<img src="images/property_images/Comfortable/banner.jpg" className="border-rds"/>
							</div>
						</div>
						<div className="col-sm-2">
							<div className="row">
								<div className="col-sm-12 mb-15">
									<div className="beach-img-box">
										<img src="images/property_images/Comfortable/2.jpg" className="border-rds side_image"/>
									</div>
								</div>
								<div className="col-sm-12 mb-15">
									<div className="beach-img-box">
										<img src="images/property_images/Comfortable/3.jpg" className="border-rds side_image"/>
									</div>
								</div>
								<div className="col-sm-12 mb-15">
									<div className="beach-img-box">
										<img src="images/property_images/Comfortable/4.jpg" className="border-rds side_image"/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="check-availability-second mt-15">
				<div className="container-fluid">
					<div className="row">
						<div className="col-sm-8">
							<div className="bed-list">
								<div className="bed-inner">
									<ul>
										<li>7 guests</li>
										<li>3 Bedrooms</li>
										<li>5 Beds</li>
										<li>2 Baths</li>
										{/*<li>5 Accommodates</li>*/}
									</ul>
								</div>
								{/*<p>NOTE : Construction next door to my property is scheduled to start in October. I am happy to refund $50 per day that noise from this project affects your stay but want all potential guests to be aware of this issue prior booking.</p>
								<p>Relaxing refuge set on a lush hillside in the quiet seaside town of Stinoson Beach. Feel trensported by the suthentic Japanese design aesthetic and tranquil outdoor shower and soaking tub. Indulge in treetop ocean views from the comfort of a queen bed, and watch the sun set from the privacy of a wooden deck Walk only five minutes to three miles of perfect beach.</p>*/}
								<br/>
								<div class="row row_padding">
									<hr class="top_hr"/>
									<ul class="fa-ul">
										<li>
											<i class="fa-li fa fa-home"></i>
											<h5><strong>Entire home</strong></h5>
											<span>You’ll have the cottage to yourself.</span>
										</li>
										<li>
											<i class="fa-li fa fa-bell"></i>
											<h5><strong>Self check-in</strong></h5>
											<span>Check yourself in with the lockbox.</span>
										</li>
										<li>
											<i class="fa-li fa fa-lightbulb-o"></i>
											<h5><strong>Sparkling clean</strong></h5>
											<span>10 recent guests said this place was sparkling clean.</span>
										</li>
										<li>
											<i class="fa-li fa fa-trophy"></i>
											<h5><strong>Jeff is a Superhost</strong></h5>
											<span>Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.</span>
										</li>
									</ul>
									
									<hr/>
									
									<p>Feel at home on the beach....walk right out to sand. 7 guests max. Recently renovated, comfortable, cozy beachfront dog-friendly home w/ open great room for your family to enjoy the priceless views of sand and surf. 3 BR/2 baths +enclosed outdoor shower. 1 dog welcome, $60/dog - charged separately once your booking is confirmed and accepted by the host. Cleaning fee, AirBnb Service Fee and 14% "hotel occupancy tax" will be charged at the time of booking</p>
									
									<p>Stays can not begin or end on a Saturday.</p>
									<br/>
									<h4><strong>The space</strong></h4>
									
									<p>It really is RIGHT ON THE BEACH. Remodeled in the Winter of 2018. Easy beach access right out the private front gate and onto the sand. La Playa has stunning views and easy quick access to the beach and to the quaint Stinson Beach town. Maximum daytime guests is 12, nighttime 7.<br/>
									Two bedrooms have comfy queen beds, the third bedroom has a set of bunk beds and another twin bed. Great room and fully equiped kitchen - each with lovely ocean views. Two renovated lovely bathrooms. Convenient private outside hot shower located in protected side yard, perfect for morning shower or rinsing off after a swim in the ocean. Large front patio with gas firepit and cordoned-off beach area (in summer) for your exclusive use.<br/>
									Parking for up to 4 cars.<br/>
									Adjacent to the GGNRA federal park with seasonal lifeguards on the beach. Five minute stroll to Stinson Beach's quaint town, restaurants, surf/kayak rental, snackbar, grocery store, library, and playgrounds.<br/>
									Stinson Beach is a great place to visit all year round. Summer is the busiest time with more visitors, while Fall, Winter and Spring can offer you the solitude of an uncrowded stretch of beach. Come to relax, come to play, in this sunny, delightful south-west facing home.<br/>
									Also please check out our other vacation rentals (each 1 bedroom apartments that sleep 2) that are located on the same property on a second floor - but not over the main house. The Airbnb names are 1) Stinson Oceanfront - La Sirena and 2) Relax & Enjoy an Oceanfront Getaway - La Paz. Rent two or all three together for a memorable get together. Terrific for family reunions. No split weekends.</p>
									
									<br/>
									<h4><strong>Guest access</strong></h4>
									<p> Beach house, front and side patios with gas BBQ and gas firepit, roped off beach area (summer), outside private shower and parking for up to 4 cars. Free WiFi, flat panel satellite Smart TV.</p>
									
									<p>Check-in time 5pm; check-out time 11 am.</p>
									<br/>
									<h4><strong>Other things to note</strong></h4>
									
									<p>Dog bed, dog dishes and treats provided.</p>
									<p>Maximum daytime guests is a total of 12 guests.</p>
									<p>We do not split weekends (no Saturday arrivals/departures).</p>
									
									{/*<div class="col-sm-4 house_rules">
										<img src="images/icons/No/002-non-smoking-area.svg" alt="No smoking"/>
										<span>No smoking</span>
									</div>
									<div class="col-sm-4 house_rules">
										<img src="images/icons/No/003-no-alcohol.svg" alt="No smoking"/><span>No parties or events</span>
									</div>
									<div class="col-sm-4 house_rules">
										<img src="images/icons/No/Pets-Allowed.svg" alt="No smoking"/><span>Pets are allowed</span>
									</div>*/}
								</div>
								<div class="row row_padding">
									<hr/>
									<h4>House Rules</h4>
									<strong>Things to know</strong>
									<ul>
										<li>Check-in: After 3PM</li>
										<li>Checkout: 11AM</li>
									</ul>
									<br/>
									<strong>General rules</strong>
									<ul>
										<li>No smoking</li>
										<li>No parties or events</li>
										<li>Not suitable for children and infants</li>
									</ul>
									<br/>
									<strong>From your host</strong>
									<ul class="no-decoration">
										<li>Maximum of two overnight guests and two additional day-time guests. 1 well-behaved dog allowed. Fragile septic system. Please be mindful of water usage. No smoking on premises. No parties.</li>
									</ul>
									<br/>
									<strong>You must also acknowledge</strong>
									<ul>
										<li>Security Deposit - if you damage the home, you may be charged up to €180</li>
										<li>Some spaces are shared - Private BBQ and deck. Large back patio with fire pit shared with one other 1 bedroom unit</li>
									</ul>
									<hr/>
									<h4>Cancellation policy</h4>
									<p>Free cancellation for 48 hours. After that, cancel up to 7 days before check-in and get a 50% refund, minus the service fee.</p>
								</div>
							</div>
						</div>
						<div className="col-sm-4">
							<div className="notes-side-box border-rds">
								<div className="row">
									<div className="col-sm-5 border-right">
										<div className="note-box-inner">
											<div className="auther-img">
											</div>
											<p className="Royal">Royal Condo Vacation</p>
											<p className="Member">Member since 2014</p>
										</div>
									</div>
									<div className="col-sm-7">
										<div className="notes-side-content">
											<p>"It is my pleasure to have you comfortably tucked away while getting a chance to unwind, recharge, and drink in the beauty that surrounds you."</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<br/><br/>
			{/*
			<hr/>
			<section className="property-services">
				<div className="container-fluid">
					<div className="row">
						<div className="col-sm-12">
							<div className="rent-title">
								<h3 className="title text-left">Tour This Guesthouse</h3>
							</div>
						</div>
					</div>
					<div className="row">
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
					<hr/>
					<div className="row">
						<div className="col-sm-12">
							<div className="rent-title">
								<h3 className="title text-left">Amenities</h3>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-sm-3">
							<div className="property-services-box text-center">
								<div className="property-services-box-inner light-bg">
									<img src="images/icons/Product_details/cooking.svg"/>
								</div>
								<p><strong>Full kitchen</strong></p>
							</div>
						</div>
						<div className="col-sm-3">
							<div className="property-services-box text-center">
								<div className="property-services-box-inner light-bg">
									<img src="images/icons/Product_details/008-wifi.svg"/>
								</div>
								<p><strong>Wifi</strong></p>
							</div>
						</div>
						<div className="col-sm-3">
							<div className="property-services-box text-center">
								<div className="property-services-box-inner light-bg">
									<img src="images/icons/Product_details/009-tv.svg"/>
								</div>
								<p><strong>TV</strong></p>
							</div>
						</div>
						<div className="col-sm-3">
							<div className="property-services-box text-center">
								<div className="property-services-box-inner light-bg">
									<img src="images/icons/Product_details/007-bathtub.svg"/>
								</div>
							   <p><strong>Bathroom essentials</strong></p>
							</div>
						</div>
						<div className="col-sm-3">
							<div className="property-services-box text-center">
								<div className="property-services-box-inner light-bg">
									<img src="images/icons/Product_details/001-pillow.svg"/>
								</div>
								<p><strong>Bedroom comforts</strong></p>
							</div>
						</div>
						<div className="col-sm-3">
							<div className="property-services-box text-center">
								<div className="property-services-box-inner light-bg">
									<img src="images/icons/Product_details/002-coffee-maker.svg"/>
								</div>
								<p><strong>Coffee maker</strong></p>
							</div>
						</div>
						<div className="col-sm-3">
							<div className="property-services-box text-center">
								<div className="property-services-box-inner light-bg">
									<img src="images/icons/Product_details/004-parking.svg"/>
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
					<hr/>
					<div className="row">
						<div className="col-sm-12">
							<div className="rent-title">
								<h3 className="title text-left">Location</h3>
							</div>
						</div>
					</div>
					<div className="row">
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
								<img className="border-rds" src="images/map-2.png"/>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="property-location">
				<div className="container-fluid">
					<hr/>
					<div className="row">
						<div className="col-sm-12">
							<div className="rent-title">
								<h3 className="title text-left">Reviews</h3>
							</div>
						</div>
					</div>
					<div className="row">
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
					<div className="row">
						<div className="col-sm-12">
							<div className="c-footer mtb-15">
								<a href="#">Show all reviews &gt;</a>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="meet-the-owner">
				<div className="container-fluid">
					<hr/>
					<div className="row">
						<div className="col-sm-12">
							<div className="rent-title">
								<h3 className="title text-left">Meet the Owner</h3>
							</div>
						</div>
					</div>
					<div className="row mb-40">
						<div className="col-sm-9">
							<div className="meet-box">
								<div className="row">
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
					<hr/>
					<div className="row mt-40">
						<div className="col-sm-6 border-right">
							<div className="rent-title mtt-0">
								<h3 className="title text-left">House Rules</h3>
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
								<h3 className="title text-left">Cancellation Policy</h3>
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
					<hr/>
					<div className="row">
						<div className="col-sm-12">
							<div className="rent-title">
								<h3 className="title text-left">Other Places to Stay</h3>
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
											<img className="author-picture " src="images/bed.jpg" alt="..."/>
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
											<img className="author-picture " src="images/bed.jpg" alt="..."/>
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
											<img className="author-picture " src="images/bed.jpg" alt="..."/>
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
					<div className="row">
						<div className="col-sm-12">
							<div className="c-footer mtb-15">
								<a href="#">Show more &gt;</a>
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

export default Comfortable_updated_vintage_beach_house;
