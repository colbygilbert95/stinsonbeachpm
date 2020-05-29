import React, { Component } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { NavLink } from "react-router-dom";
import SearchForm from "../Home/SearchForm/SearchForm";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />

        <div className="main-banner">
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container-fluid">
                <div className="row align-items-center">
                  <div className="col-lg-9"></div>
                  {<SearchForm />}
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
                  <p>
                    Our <strong>Revenue Guarantee*</strong> is straightforward
                    and simple: we are only successful when you are.{" "}
                  </p>
                  <br />
                  <p>
                    We guarantee you’ll make at least $5,000 more in your first
                    year with us.{" "}
                  </p>

                  <p>
                    We know that choosing the right property manager can be
                    difficult and stressful. You want to know you’re making the
                    smartest decision for you, your family and your vacation
                    home.{" "}
                  </p>
                  <p>
                    That’s why we’ve created the{" "}
                    <strong>Stinson Beach PM Revenue Guarantee</strong> to help
                    you discover the smarter way to vacation rental.
                  </p>
                  <p>
                    By every measure, Stinson Beach PM has proven we know what
                    it takes to make your vacation rental successful.
                  </p>

                  <p>
                    We manage every aspect of your vacation rental, helping you
                    earn more revenue with effective marketing, listing
                    optimization and a dedicated reservations team.{" "}
                  </p>
                </div>
              </div>
              {/* <div className="col-sm-4 border-left">
							<div className="get-appointment-form">
								<h3>Testimonial</h3>
								<p>"Having made the switch to TurnKey, feel I’m finally working with a manager who ‘gets it.’ They maximize my bookings while screening guests to take care of my property. TurnKey is the only property
								manager who can do both well. And their technology and housekeeping processes blow the doors off other property managers. </p>
								<p><strong>Stinson Beach PM is the gold standard </strong> in vacation rental property management."</p>
							</div>
							<div className="testimonial-client-img">
								<div className="testimonial-client-img-inner"></div>
								<div className="get-appointment-form">
									<h3>Matt Golis</h3>
									<p>Former Board Member of the Vacation Rental Management Association (VRMA) </p>
								</div>
							</div>
						</div> */}
            </div>
            <div className="row">
              <div className="col-sm-8">
                <hr />
                <div className="gurant-last-content">
                  <p>*Stinson Beach PM Guarantee terms and conditions: </p>
                  <p>
                    We guarantee up to our management commission earned and the
                    Stinson Beach PM Guarantee is not intended to solicit the
                    breach of an existing vacation rental management agreement.
                  </p>
                  <p>
                    In order to initially qualify, you must have rented your
                    vacation rental for at least one year (12 consecutive
                    months) and be able to provide the proper documentation
                    demonstrating your net rental revenue during that period.
                  </p>
                  <p>
                    The $5,000 guarantee is based on net revenue. The guarantee
                    for owners managing their own property is also based on net
                    rental revenue.
                  </p>
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
