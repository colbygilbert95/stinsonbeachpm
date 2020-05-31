import React, { Component } from "react";
import moment from "moment";

class Rules extends Component {
  state = {};
  // componentDidUpdate(prevProps) {
  //   if(prevProps.listiong.PolicyDescription != this.props.listing.PolicyDescription) {
  //     cancPolicy
  //   }
  // }
  render() {
    const { listing } = this.props;
    const cancPolicy =
      listing.PolicyDescription === undefined ? "" : listing.PolicyDescription;

    return (
      <section>
        <div className="container-n">
          <div className="row  mt-40">
            <div className="col-sm-6 border-right">
              <div className="rent-title mtt-0">
                <h3 className="title text-left"><strong>House Rules</strong></h3>
              </div>
              <p>
                The host has set some house rules, which you’ll be asked to
                agree to when you book.
              </p>
              <p>
                <strong>Check-in:</strong> After{" "}
                {moment("2020-01-01 " + listing.Checkin).format("hA")}
              </p>
              <p>
                <strong>Checkout</strong>{" "}
                {moment("2020-01-01 " + listing.Checkout).format("hA")}
              </p>
              <div className="c-footer mtb-15">
                <a href="#">Show all rules &gt;</a>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="rent-title mtt-0">
                <h3 className="title text-left"><strong>Cancellation Policy</strong></h3>
              </div>
              {cancPolicy.split(/\n/i).map(text => {
                return <p>{text}</p>;
              })}
              <div className="c-footer mtb-15">
                <a href="#">Show all policy &gt;</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Rules;
