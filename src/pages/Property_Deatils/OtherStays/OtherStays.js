import React, { Component } from "react";
import { getActiveUnits } from "../../../store/actions/bookingActions";
import { connect } from "react-redux";
import OtherStayCard from "./OtherStayCard/OtherStayCard";
import Slider from "react-slick";

class OtherStays extends Component {
  constructor(props) {
    super(props);
    this.state = {
      changeToSlider: false,
      sliderShowNumber: 3,
    };
  }
  componentDidMount() {
    this.props.getActiveUnits();
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }
  resize() {
    if (window.outerWidth >= 501 && window.outerWidth <= 800) {
      this.setState({
        sliderShowNumber: 2,
      });
    } else if (window.outerWidth <= 500) {
      this.setState({
        sliderShowNumber: 1,
      });
    } else {
      this.setState({
        sliderShowNumber: 3,
      });
    }
  }
  render() {
    const { units } = this.props;
    const displayUnits = units.slice(0, 5);

    const settings = {
      infinity: true,
      slidesToShow: this.state.sliderShowNumber,
      slidesToScroll: 1,
      adaptiveHeight: false,
    };
    return (
      <section className="book-rental-inner mb-70">
        <div className="container-n">
          <hr />
          <div className="rent-title">
            <h3 className="title text-left">
              <strong>Other Places to Stay</strong>
            </h3>
          </div>
          {/* {this.state.changeToSlider ? (
            <Slider {...settings}>
              {displayUnits.map((unit, index) => {
                return <OtherStayCard unitData={unit} key={index} />;
              })}
            </Slider>
          ) : (
              <div className="card-wrapper-n">
                {displayUnits.map((unit, index) => {
                  return <OtherStayCard unitData={unit} key={index} />;
                })}
              </div>
            )} */}
          {
            <Slider {...settings}>
              {displayUnits.map((unit, index) => {
                return <OtherStayCard unitData={unit} key={index} />;
              })}
            </Slider>
          }

          <div className="c-footer mtb-15 mt-20">
            <a href="#">Show mores &gt;</a>
          </div>
        </div>
      </section>
    );
  }
}
const mapStateToProps = state => {
  return {
    units: state.booking.units,
  };
};

export default connect(mapStateToProps, { getActiveUnits })(OtherStays);
