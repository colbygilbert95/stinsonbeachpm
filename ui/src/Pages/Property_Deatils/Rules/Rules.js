import React, { Component } from 'react';

class Rules extends Component {
    state = {  }
    render() { 
        const {listing} = this.props
        return ( <section>
            <div className="row mt-40">
              <div className="col-sm-6 border-right">
                <div className="rent-title mtt-0">
                  <h3 className="title text-left">House Rules</h3>
                </div>
                <p>
                  The host has set some house rules, which you’ll be asked to
                  agree to when you book.
                </p>
                <p>
                  <strong>Check-in:</strong> After 3PM
                </p>
                <p>
                  <strong>Checkout</strong> 11AM{" "}
                </p>
                <div className="c-footer mtb-15">
                  <a href="#">Show all rules &gt;</a>
                </div>
              </div>
              <div className="col-sm-6 pr-40">
                <div className="rent-title mtt-0">
                  <h3 className="title text-left">Cancellation Policy</h3>
                </div>
                <p>Free cancellation for 48 hours. </p>
                <p>
                  After that, cancel up to 5 days before check-in and get a full
                  refund, minus the service fee
                </p>
                <div className="c-footer mtb-15">
                  <a href="#">Show all policy &gt;</a>
                </div>
              </div>
            </div>
          </section> );
    }
}
 
export default Rules;