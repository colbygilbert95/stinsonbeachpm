import React, { Component } from 'react';
import Header from '../Header/Header';
import { BrowserRouter, Route, NavLink, HashRouter, Switch } from "react-router-dom";
import CheckAvailabilityModal from '../Check_availability/CheckAvailabilityModal'

class Single_blog extends Component {
	constructor(props) {
		super(props)
		this.state = {
			modalState: false,
			startDate: {},
			endDate: {}
		}
	}

	startDateCallback = (date) => {
		this.setState({ startDate: date })
	}

	endDateCallback = (date) => {
		this.setState({ endDate: date })
	}
	openCheckAvailabilityModal = () => {
		this.setState({
			modalState: true
		})
	}

	closeModal = () => {
		this.setState({ modalState: false })
	}

	render() {
		return (
			<div>
				<Header />
				<CheckAvailabilityModal modalState={this.state.modalState} closeModal={this.closeModal} />
				<section className="check-availability-section">
					<div className="beach-box border-rds h-unset">
						<h1>Beach View at the Bird's Nest Bungalow</h1>
					</div>
					<div className="beach-img-box">
						<img src="https://storage.googleapis.com/stinsonbeachpm.appspot.com/property_images/27_Pradero/27%20Pradero%2010.jpeg" className="border-rds large-img" />
					</div>
					<div className="check-availability-gallery hidden-md hidden-sm hidden-xs">
						<div className="beach-img-box">
							<img src="https://storage.googleapis.com/stinsonbeachpm.appspot.com/property_images/27_Pradero/27%20Pradero%2020.jpg" className="border-rds small-img" />
						</div>
						<div className="beach-img-box">
							<img src="https://storage.googleapis.com/stinsonbeachpm.appspot.com/property_images/27_Pradero/27%20Pradero%201.jpg" className="border-rds small-img" />
						</div>
						<div className="beach-img-box">
							<img src="https://storage.googleapis.com/stinsonbeachpm.appspot.com/property_images/27_Pradero/27%20Pradero%2019.jpg?authuser=2" className="border-rds small-img" />
						</div>
					</div>
				</section>
				<section className="check-availability-second mt-15">
					<div className="container-fluid">
						<div className="row">
							<div className="col-sm-7">
								<div className="bed-list">
									<div className="bed-inner">
										<ul>
											<li>2 guests</li>
											<li>Studio</li>
											<li>2 Beds</li>
											<li>1 bath</li>
										</ul>
									</div>
									<p>NOTE : Construction next door to my property is scheduled to start in October. I am happy to refund $50 per day that noise from this project affects your stay but want all potential guests to be aware of this issue prior booking.</p>
									<p>Relaxing refuge set on a lush hillside in the quiet seaside town of Stinoson Beach. Feel trensported by the suthentic Japanese design aesthetic and tranquil outdoor shower and soaking tub. Indulge in treetop ocean views from the comfort of a queen bed, and watch the sun set from the privacy of a wooden deck Walk only five minutes to three miles of perfect beach.</p>
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
				<section className="check-last-section">
					<div className="container-fluid">
						<div className="row">
							<div className="col-sm-2 border-right">
								<div className="check-logo-img">
									<img src="images/footer-logo.png" />
								</div>
							</div>
							<div className="col-sm-7">
								<p><strong>ENTIRE GUESTHOUSE IN STINSON BEACH</strong></p>
								<div className="like">
									<a href="#">
										<i className="fa fa-star mr-2"></i>
										<span className="small"><strong>731</strong>(16)</span>
									</a>
								</div>
							</div>
							<div className="col-sm-3">
								<p className="pull-left mt-15"><strong>$145</strong> / night</p>
								<span className="check-btn mt-15">
									<button type="submit" className="btn btn-primary" onClick={this.openCheckAvailabilityModal}>Check Availability</button>
								</span>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default Single_blog;
