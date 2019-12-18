import React, { Component } from 'react';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import { BrowserRouter, Route, NavLink, HashRouter, Switch } from "react-router-dom";
const { FaIcon, FaStack } = require('react-fa-icon');

class Stinson_Beach_Vibe_Cheerful_Cottage_w_Garden extends Component {
	render() {
		
		return (
		<div>
			
			<Header/>
			
			<section className="check-availability">
				<div className="container-fluid">
					<div className="row">
						<div className="col-sm-4">
							<div className="beach-box border-rds">
								<h1>Stinson Beach Vibe - Cheerful Cottage w Garden</h1>
							</div>
						</div>
						<div className="col-sm-6">
							<div className="beach-img-box">
								<img src="images/properties_images/Casita_Azul/Casita_Azul_22.jpg" className="border-rds"/>
							</div>
						</div>
						<div className="col-sm-2">
							<div className="row">
								<div className="col-sm-12 mb-15">
									<div className="beach-img-box">
										<img src="images/properties_images/Casita_Azul/Casita_Azul_Colby_1.jpg" className="border-rds side_image"/>
									</div>
								</div>
								<div className="col-sm-12 mb-15">
									<div className="beach-img-box">
										<img src="images/properties_images/Casita_Azul/Casita_Azul_01.jpg" className="border-rds side_image"/>
									</div>
								</div>
								<div className="col-sm-12 mb-15">
									<div className="beach-img-box">
										<img src="images/properties_images/Casita_Azul/Casita_Azul_09.jpg" className="border-rds side_image"/>
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
										<li>3 guests</li>
										<li>1 Bedrooms</li>
										<li>2 Beds</li>
										<li>1 Baths</li>
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
											<span>Check yourself in with the keypad.</span>
										</li>
										<li>
											<i class="fa-li fa fa-lightbulb-o"></i>
											<h5><strong>Sparkling clean</strong></h5>
											<span>15 recent guests said this place was sparkling clean.</span>
										</li>
										<li>
											<i class="fa-li fa fa-map fa-maker"></i>
											<h5><strong>Great location</strong></h5>
											<span>100% of recent guests gave the location a 5-star rating.</span>
										</li>
									</ul>
									
									<hr/>
									
									<p>Enviably located only a few minutes walk away from the invigorating Stinson beach, in the area that perfectly reflects that laid back Californian spirit, the cottage is tailored with comfort and practicality in mind and ideally accommodates 3 people!
									Should you have a group larger than 3, check out our cute & colourful sister property nearby.</p>
									
									<p>Welcome!</p>
									<br/>
									<h4><strong>The space</strong></h4>
									
									<p>￭ Living Room <br/>
									Well-arranged with large windows and plenty of natural light, the living room joins the dining area and the kitchen, creating a warm, cosy space, with a relaxing holiday vibe. Pull out sofa bed that makes into a full-sized bed is easily folded back, freeing the space for daily activities.</p>
									
									<p>￭ Kitchen <br/>
									Large kitchen with dining island is well equipped with extra amenities to maximise your stay with functionality & comfort.</p>
									
									<p>￭ Bedroom <br/>
									One bedroom with a queen-size bed match in simple style and comfort of this Stinson Beach cottage. Along with the regular commodities found in the room, the area has generous windows offering plenty of natural light.</p>
									
									<p>￭ Outdoors space <br/>
									Relax on the loungers at the porch, contemplate the sky from the garden, freshen up with the outdoor shower. The outdoors area has everything you need for that beloved barbecue evenings as well.</p>
									
									<p>￭ Parking is available near the cottage, free wifi, towels & linens.</p>
									
									<p>￭ Floor heating and double pane windows.</p>
									
									<br/>
									<h4><strong>Guest access</strong></h4>
									<p> It's all yours! You will have a cottage for private use along with the private outdoor area and a designated parking spot.</p>
									
									<br/>
									<h4><strong>Other things to note</strong></h4>
									
									<p>Relax, enjoy, unwind!</p>
									
									
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
									</ul>
									<br/>
									<strong>From your host</strong>
									<ul class="no-decoration">
										<li>Just enjoy and take good care of the place as if it were a friend's home.</li>
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

export default Stinson_Beach_Vibe_Cheerful_Cottage_w_Garden;
