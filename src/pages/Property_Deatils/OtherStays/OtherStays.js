import React, { Component } from "react";
import { getActiveUnits } from "../../../store/actions/bookingActions";
import { connect } from "react-redux";
import OtherStayCard from "./OtherStayCard/OtherStayCard"
import Slider from "react-slick";

class OtherStays extends Component {
  constructor(props){
    super(props)
    this.state = {
      changeToSlider: false
    }
  }
  componentDidMount() {
    this.props.getActiveUnits();
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }
  resize() {
    if (window.innerWidth <= 1250) {
      this.setState({
        changeToSlider: true
      });
    }
    else {
      this.setState({
        changeToSlider: false
      });
    }
  }
  render() {
    const { units } = this.props
    const displayUnits = units.slice(0, 5)
    const settings = {
      infinity: false,
      slidesToShow: 2,
      slidesToScroll: 1
    };
    return (
      <section className="book-rental-inner mb-70">
        <div className="container-fluid">
          <hr />
          <div className="row row_padding">

            <div className="col-sm-12">
              <div className="rent-title">
                <h3 className="title text-left">Other Places to Stay</h3>
              </div>
            </div>
          </div>
          { this.state.changeToSlider ? 
            <Slider {...settings}>  
              {
                displayUnits.map((unit, index) => {
                  return (<OtherStayCard unitData={unit} key={index} />)
                })
              }
            </Slider> 
            :
            <div className="otherPlacesWrapper">
              {
                displayUnits.map((unit, index) => {
                  return (<OtherStayCard unitData={unit} key={index} />)
                })
              }          
            </div>
        }
          <div className="row row_padding">
            <div className="col-sm-12">
              <div className="c-footer mtb-15">
                <a href="#">Show more &gt;</a>
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
    units: state.booking.units
  };
};

export default connect(mapStateToProps, { getActiveUnits })(OtherStays);
