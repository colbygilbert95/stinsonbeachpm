import React, { Component } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { NavLink } from "react-router-dom";
import SearchForm from "./SearchForm/SearchForm";


class Home extends Component {


  render() {
    return (
      <div>
        <Header />

        <div className="main-banner">
          <div className="container">
            <div className="row flex justify-content-end py-5 pr-60 pl-60">
              {<SearchForm />}
            </div>
          </div>
        </div>
        <div className="earn-more">
          <h3>Earn $5,000 More Or We Pay You</h3>
        </div>
        <section className="why ptb">
          <div className="container custom-container">
            <div className="custom-row">
              <div className="row">
                <div className="col-sm-12 col-md-6 mt-15">
                  <div className="custom-media-box">
                    <div className="media">
                      <h3>Why Stinson Beach Property Management?</h3>
                      <div className="cu-media-body">
                        <div className="media-contant">
                          <p>
                            We guarantee you will make at least $5,000 more in
                            the first year of working with us, or we will pay
                            you the difference.
                          </p>
                        </div>
                      </div>
                      <div className="cu-media-body">
                        <div className="media-contant">
                          <p>
                            Stinson Beach Property Management operates
                            exclusively in Stinson Beach, which allows for
                            premium individualized care to maximize your
                            property's revenue.
                          </p>
                        </div>
                      </div>
                      <div className="cu-media-body">
                        <div className="media-contant">
                          <p>
                            Stinson Beach Property Management operates
                            exclusively in Stinson Beach, which allows for
                            premium individualized care to maximize your
                            property's revenue.
                          </p>
                        </div>
                      </div>

                      <div className="cu-media-body">
                        <div className="media-contant">
                          <p>
                            We specialize in managing rentals for property
                            owners, both short and long term, and are especially
                            attentive to continually optimizing your listing on
                            the Airbnb and VRBO platforms. It makes a massive
                            difference in the number of bookings you'll get.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="cu-media-body">
                      <div className="media-contant">
                        <p>
                          Our promise is to both save you time and increase your
                          rental income. There is no contract or obligation of
                          any kind.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 mt-15">
                  <div className="client-result">
                    <h3>Client Results</h3>
                    <div className="break"></div>
                    <div className="client mb-40">
                      <p>
                        <strong>Client A: </strong>had a record year,{" "}
                        <span className="italic-underline">
                          earning $11,928 more than the previous year.
                        </span>{" "}
                        Their property was invited to Airbnb Plus, which on
                        average, results in an additional 22% increase in
                        income.
                      </p>
                    </div>
                    <div className="client">
                      <p>
                        <strong>Client B: </strong>before working with me was
                        making, on average, $2,148 per month. Now they are
                        averaging $9,572 per month.{" "}
                        <span className="italic-underline">
                          They will see an $89,093 increase in yearly revenue.
                        </span>
                      </p>
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
              <div className="col-sm-12">
                <div className="rent-title">
                  <h3 className="title text-center"><strong>Earn more in 3 Steps</strong></h3>
                </div>
              </div>
              <div className="col-sm-12 col-md-4">
                <div className="home-inner-content">
                  <h3 className="home-inner-title m0 font-lg">1.</h3>
                  <h3 className="home-inner-title mt0">
                    Receive your action plan
                  </h3>
                  <p>
                    Set up a meeting with a Homeowner Advisor to receive a
                    detailed action plan to take your property to the next
                    level.
                  </p>
                </div>
              </div>
              <div className="col-sm-12 col-md-4">
                <div className="home-inner-content">
                  <h3 className="home-inner-title m0 font-lg">2.</h3>
                  <h3 className="home-inner-title mt0">
                    We prepare your property
                  </h3>
                  <p>
                    We put the plan into motion and your property gets upgraded
                    and integrated into our management system.
                  </p>
                </div>
              </div>
              <div className="col-sm-12 col-md-4">
                <div className="home-inner-content">
                  <h3 className="home-inner-title m0 font-lg">3.</h3>
                  <h3 className="home-inner-title mt0">
                    Welcome your first guest
                  </h3>
                  <p>
                    Once your property is live, qualified guests book and
                    Homeowner payouts begin.
                  </p>
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
            <div className="row"></div>
            <div className="row">
              <div className="col-sm-12 col-md-4">
                <div className="home-inner-content">
                  <h3 className="home-inner-title">We protect homeowners</h3>
                  <p>
                    To keep you, your home , and you belongings safe and we
                    protect you by investing in the property ourselves
                  </p>
                  <p>
                    We install Smart Locks, Noise Monitors, Ensure Each Booking
                    is covered with $1M USD accident and damage protection at no
                    cost to you.
                  </p>
                </div>
              </div>
              <div className="col-sm-12 col-md-4">
                <div className="home-inner-content">
                  <h3 className="home-inner-title">Guests are verified</h3>
                  <p>
                    We only allow kind, laid back guests, that can pass our
                    bank-level ID screening to stay in your home. This catches
                    bad actors before they can even make a booking.
                  </p>
                </div>
              </div>
              <div className="col-sm-12 col-md-4">
                <div className="home-inner-content">
                  <h3 className="home-inner-title">
                    Authentic travel experiences
                  </h3>
                  <p>
                    Everything we do for guests revolves around providing the
                    consistency and service of a great hotel combined with the
                    waemth and cheracter of the home. Happy repeat guests means
                    more revenue for you.
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="row">
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
                    <h1>
                      There's no one way to host. You might be surprised by how
                      much fun you have. "
                    </h1>
                    <p>Christelle, Phoenicia , NY</p>
                    <p>
                      <a href="#" className="block">
                        Learn their story
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
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
                  <h3 className="title text-center"><strong>Your questions answered</strong></h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div
                  className="panel-group"
                  id="accordion"
                  role="tablist"
                  aria-multiselectable="true"
                >
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingOne">
                      <h4 className="panel-title">
                        <a
                          role="button"
                          className="custom-pl"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          <i className="more-less glyphicon glyphicon-plus"></i>
                          Am I a good fit for Stinson Beach PM?
                        </a>
                      </h4>
                    </div>
                    <div
                      id="collapseOne"
                      className="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby="headingOne"
                    >
                      <div className="panel-body">
                        We exclusively take on clients who have properties in
                        Stinson Beach and Bolinas. Staying focused allows us to
                        maximize revenue for clients.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div
                  className="panel-group"
                  id="accordion"
                  role="tablist"
                  aria-multiselectable="true"
                >
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingtwo">
                      <h4 className="panel-title">
                        <a
                          role="button"
                          className="custom-pl"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapsetwo"
                          aria-expanded="true"
                          aria-controls="collapsetwo"
                        >
                          <i className="more-less glyphicon glyphicon-plus"></i>
                          Do guests ever damage the property?
                        </a>
                      </h4>
                    </div>
                    <div
                      id="collapsetwo"
                      className="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby="headingtwo"
                    >
                      <div className="panel-body">
                        This is a very rare occupancy. People that can afford
                        vacations in Stinson Beach are usually types that
                        respect their surroundings. If this did ever happen, you
                        are still covered. We gather evidence and submit a claim
                        through Airbnb or VRBO's Resolution Center that provides
                        protection for up to $1,000,000 in the rare event of
                        guest damages. Homes are inspected for damage every
                        turnover, so nothing is missed.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div
                  className="panel-group"
                  id="accordion"
                  role="tablist"
                  aria-multiselectable="true"
                >
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingthree">
                      <h4 className="panel-title">
                        <a
                          role="button"
                          className="custom-pl"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapsethree"
                          aria-expanded="true"
                          aria-controls="collapsethree"
                        >
                          <i className="more-less glyphicon glyphicon-plus"></i>
                          How much will I earn?
                        </a>
                      </h4>
                    </div>
                    <div
                      id="collapsethree"
                      className="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby="headingthree"
                    >
                      <div className="panel-body">
                        The best way to answer this is to give you a detailed
                        12-month revenue projection. Give us a call, and we
                        collect the info we need to create an accurate forecast
                        and get back to you in 24hrs.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div
                  className="panel-group"
                  id="accordion"
                  role="tablist"
                  aria-multiselectable="true"
                >
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingfour">
                      <h4 className="panel-title">
                        <a
                          role="button"
                          className="custom-pl"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapsefour"
                          aria-expanded="true"
                          aria-controls="collapsefour"
                        >
                          <i className="more-less glyphicon glyphicon-plus"></i>
                          How are guests vetted?
                        </a>
                      </h4>
                    </div>
                    <div
                      id="collapsefour"
                      className="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby="headingfour"
                    >
                      <div className="panel-body">
                        In addition to requiring a verified ID by Airbnb/VRBO's
                        Trust + Safety department, we have developed a system
                        that examines the guest profile, previous reviews, and
                        message content to determine guest quality. We are
                        looking for kind, and laid back people as guests.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div
                  className="panel-group"
                  id="accordion"
                  role="tablist"
                  aria-multiselectable="true"
                >
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingfive">
                      <h4 className="panel-title">
                        <a
                          role="button"
                          className="custom-pl"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapsefive"
                          aria-expanded="true"
                          aria-controls="collapsefive"
                        >
                          <i className="more-less glyphicon glyphicon-plus"></i>
                          Can I cancel at any time?
                        </a>
                      </h4>
                    </div>
                    <div
                      id="collapsefive"
                      className="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby="headingfive"
                    >
                      <div className="panel-body">
                        Yes. You can cancel our agreement with us at any time
                        for no fee. Our agreement is simply for documentation
                        and clarity around the services I am providing you and
                        not binding in any way.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div
                  className="panel-group"
                  id="accordion"
                  role="tablist"
                  aria-multiselectable="true"
                >
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingsix">
                      <h4 className="panel-title">
                        <a
                          role="button"
                          className="custom-pl"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapsesix"
                          aria-expanded="true"
                          aria-controls="collapsesix"
                        >
                          <i className="more-less glyphicon glyphicon-plus"></i>
                          Will I have to worry about taxes?
                        </a>
                      </h4>
                    </div>
                    <div
                      id="collapsesix"
                      className="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby="headingsix"
                    >
                      <div className="panel-body">
                        We take care of all Marin County taxes, permits, and
                        licenses for you.{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div
                  className="panel-group"
                  id="accordion"
                  role="tablist"
                  aria-multiselectable="true"
                >
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingseven">
                      <h4 className="panel-title">
                        <a
                          role="button"
                          className="custom-pl"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapseseven"
                          aria-expanded="true"
                          aria-controls="collapseseven"
                        >
                          <i className="more-less glyphicon glyphicon-plus"></i>
                          Can I stay at my own place?
                        </a>
                      </h4>
                    </div>
                    <div
                      id="collapseseven"
                      className="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby="headingseven"
                    >
                      <div className="panel-body">
                        Of course, it's your place! We do not limit homeowner
                        use.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div
                  className="panel-group"
                  id="accordion"
                  role="tablist"
                  aria-multiselectable="true"
                >
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingeight">
                      <h4 className="panel-title">
                        <a
                          role="button"
                          className="custom-pl"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapseeight"
                          aria-expanded="true"
                          aria-controls="collapseeight"
                        >
                          <i className="more-less glyphicon glyphicon-plus"></i>
                          How do I get started?
                        </a>
                      </h4>
                    </div>
                    <div
                      id="collapseeight"
                      className="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby="headingeight"
                    >
                      <div className="panel-body">
                        The fastest way to get started is to give us a call at
                        415-209-5847 or give us an email at
                        Colby@StinsonBeachPM.com
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
                    <h1>Ready to Earn?</h1>
                    <p>
                      <a href="#">Get Started </a>
                    </p>
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
