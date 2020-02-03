import React, { Component } from 'react';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import { BrowserRouter, Route, NavLink, HashRouter, Switch } from "react-router-dom";
//const { FaIcon, FaStack } = require('react-fa-icon');

class Charming_Stinson_Beach_1Bd_Den_Cottage extends Component {
	render() {
		
		return (
		<div>
			
			<Header/>
			
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
								<img src="images/property_images/11_Sierra/11-Sierra-Cover.png" className="border-rds"/>
							</div>
						</div>
						<div className="col-sm-2">
							<div className="row">
								<div className="col-sm-12 mb-15">
									<div className="beach-img-box">
										<img src="images/property_images/11_Sierra/11-Sierra-Picture1.jpg" className="border-rds side_image"/>
									</div>
								</div>
								<div className="col-sm-12 mb-15">
									<div className="beach-img-box">
										<img src="images/property_images/11_Sierra/11-Sierra-Picture2.jpg" className="border-rds side_image"/>
									</div>
								</div>
								<div className="col-sm-12 mb-15">
									<div className="beach-img-box">
										<img src="images/property_images/11_Sierra/11-Sierra-Picture3.jpg" className="border-rds side_image"/>
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
										<li>5 guests</li>
										<li>1 Bedrooms</li>
										<li>3 Beds</li>
										<li>1.5 Baths</li>
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
											<i class="fa-li fa fa-trophy"></i>
											<h5><strong>Lisa is a Superhost</strong></h5>
											<span>Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.</span>
										</li>
										<li>
											<i class="fa-li fa fa-map fa-maker"></i>
											<h5><strong>Great location</strong></h5>
											<span>100% of recent guests gave the location a 5-star rating.</span>
										</li>
									</ul>
									
									<hr/>
									
									<p>Half block to the beach, walk to town, close hiking Mt. Tam, Muir Woods, Pt. Reyes.</p>
									<p>Upstairs: Queen bed, 1/2 bath, sitting room with day bed (bigger than twin, smaller than double) and streaming TV, private deck with partial ocean view.</p>
									<p>Downstairs: Queen Murphy bed (pulls down from the wall), living room, dining room, kitchen, bath with shower and tub.</p>
									<p>Fenced yard with front and back decks, BBQ, table and chairs, lounge chairs, hammock, outdoor shower.</p>
									<br/>
									<h4><strong>The space</strong></h4>
									
									<p>￭ Located in Stinson Beach Village just 6 houses from the beach and 2 blocks to town. Enter into the gated yard to the peaceful ambience of this beautiful home. The house is surrounded by decks and a lovely landscaped yard with a sense of privacy. Hardwood and Spanish-tile floors, high ceilings and skylights for plenty of light.</p>
									
									<p>￭ Well-appointed rooms including luxury bedding, a newly remodelled fully-equipped kitchen, a Netflix streaming TV, and a warm water outdoor shower.</p>
									
									<p>￭ A wood-burning fireplace warms this cozy house. There is an ocean view from the upper deck.</p>
									
									<p>￭ Well-behaved dogs allowed.</p>
									
									<p>Amenities:
									Garden, Patio, Deck, 1-Wood Fireplaces, Gas BBQ, BBQ Tools, Wall and Space Heaters, 4-Burner Electric Range, Single Oven, Microwave, Coffee Maker, Coffee Grinder, Toaster, Blender, Tea Kettle, 1 TV (Internet), Wireless High Speed Internet, TV Has Netflix Streaming. Parking for 1 car in the driveway.</p>
									
									<p>Outdoor equipment:
									Outside Shower, Table, Chairs, Umbrella, Lounge Chairs, Hammock, gas BBQ.</p>
									
									<br/>
									<h4><strong>Guest access</strong></h4>
									<p>It's all yours! The entire house, washer & dryer, the outdoor shower, back yard, and decks.</p>
									
									<br/>
									<h4><strong>Other things to note</strong></h4>
									
									<p>￭ The space is perfect for 2 couples or a family with one or two kids. Upstairs, a young child can sleep in the double futon bed in an L-shaped sitting room adjacent to the master bedroom. There are no walls between these rooms.</p>
									
									<p>￭ The downstairs queen Murphy bed is good for a second couple or an older child or teen</p>
									
									<p>￭ This is a dog-friendly cottage. Please be aware of this in case you have allergies. We clean very well after each guest (including damp mopping floors). No refunds will be given for allergic reactions.</p>
									
									<br/>
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

export default Charming_Stinson_Beach_1Bd_Den_Cottage;
