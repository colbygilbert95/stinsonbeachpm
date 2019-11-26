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
						<div className="container-fluid">
							<div className="row align-items-center">
								<div className="col-lg-9"></div>
								<div className="col-lg-3">
									<div className="get-appointment-form">
										<h3>Vacation Home Managment</h3>
										<p>Earn $5000 More Or We Pay You</p>
										<p className="mtb"><span className="pull-left">Revenue Guarantee</span><span className="pull-right"><a href="#">Learn More</a></span></p>
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
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<section className="guarantee mb-70 mt-30">
				<div className="container custom-container">
					<div className="row">
						<div className="col-sm-8">
							<div className="guarantee-inner-content">
								<p>Our <strong>Revenue Guarantee*</strong> is straightforward and simple: we’re only successful when you are. </p>
								<p><strong>Switching property managers? </strong></p>
								<p>We guarantee you’ll make at least $5,000 more in your first year with us. </p>
								<p><strong>Managing your own home? </strong></p>
								<p>We guarantee you’ll earn at least the same rental revenue you currently make. </p>
								<p>We know that choosing the right property manager can be difficult and stressful. You want to know you’re making the smartest decision for you, your family and your vacation home. </p>
								<p>That’s why we’ve created the  <strong>DIPSEA Revenue Guarantee</strong> to help you discover the smarter way to vacation rental.</p>
								<p>By every measure, DIPSEA has proven we know what it takes to make your vacation rental successful: </p>
								<ul className="pd-0">
									<li>Winning Travel Weekly’s Magellan Award for Vacation Rental Hospitality (twice!) </li>
									<li>Managing thousands of homes and hundreds of thousands of bookings</li>
									<li>More than 90% guest ratings of 4 or 5 stars </li>
									<li>And more! </li>
								</ul>
								<p>We manage every aspect of your vacation rental, helping you earn more revenue with effective marketing, listing optimization and a dedicated reservations team. </p>
								<p>You’ll gain peace of mind with our industry-leading guest verification technology and unparalleled home cleans. In addition, our technology paired with expert, local teams create a premier hospitality experience your guests will never forget.</p>
								<p>We do all this and more at an industry-low commission rate, typically half the average rate of 35-50%. </p>
								<p>DIPSEA is truly the smarter way to vacation rental.</p>
							</div>
						</div>
						<div className="col-sm-4 border-left">
							<div className="get-appointment-form">
								<h3>Testimonial</h3>
								<p>"Having made the switch to TurnKey, feel I’m finally working with a manager who ‘gets it.’ They maximize my bookings while screening guests to take care of my property. TurnKey is the only property
								manager who can do both well. And their technology and housekeeping processes blow the doors off other property managers. </p>
								<p><strong>DIPSEA is the gold standard </strong> in vacation rental property management."</p>
							</div>
							<div className="testimonial-client-img">
								<div className="testimonial-client-img-inner"></div>
								<div className="get-appointment-form">
									<h3>Matt Golis</h3>
									<p>Former Board Member of the Vacation Rental Management Association (VRMA) </p>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-sm-8">
							<hr/>
							<div className="gurant-last-content">
								<p>*DIPSEA Guarantee terms and conditions: </p>
								<p>We guarantee up to our management commission earned and the DIPSEA Guarantee is not intended to solicit the breach of an existing vacation
								rental management agreement. 
								</p>
								<p>In order to initially qualify, you must have rented your vacation rental for at least one year (12 consecutive months) and be able to provide the proper documentation demonstrating your net rental revenue during that period. </p>
								<p>The $5,000 guarantee is based on net revenue and only applicable if your rental is currently being managed by another vacation property
								management company. The guarantee for owners managing their own property is also based on net rental revenue. Other terms and conditions
								apply. </p>
								<p>In accordance with local laws and regulations, the DIPSEA Revenue Guarantee is not available in all states. Please contact DIPSEA to confirm availability.
								</p>
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
