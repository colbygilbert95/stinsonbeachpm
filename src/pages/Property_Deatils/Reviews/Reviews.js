import React, { Component } from "react";
import { connect } from "react-redux";
import { getUnitReviews } from "../../../store/actions/bookingActions";
import Review from "./Review/Review";

class Reviews extends Component {
  componentDidMount() {
    const { unitName } = this.props;
    this.props.getUnitReviews(unitName);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.unitName != this.props.unitName) {
      const { unitName } = this.props;
      this.props.getUnitReviews(unitName);
    }
  }
  render() {
    const { numReviews, avgReviews } = this.props;
    return (
      <section className="property-location">
        <div className="container-n">
          <hr />
          <div className="row ">
            <div className="col-sm-12">
              <div className="rent-title">
                <h3 className="title text-left">Reviews</h3>
              </div>
            </div>
          </div>
          <div className="row ">
            {this.props.reviews.map((review, index) => {
              return <Review reviewData={review} key={index} />;
            })}
          </div>
          <div className="row ">
            <div className="col-sm-12">
              <div className="c-footer mtb-15">
                <a href="#">Show all {numReviews} reviews &gt;</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    reviews: state.booking.reviews,
  };
};

export default connect(mapStateToProps, { getUnitReviews })(Reviews);
