import React, { Component } from 'react';
import { getUnitHeaderImgs } from "../../../store/actions/bookingActions"
import { connect } from "react-redux";
class HeaderImages extends Component {
  componentDidMount() {
    const { unitName } = this.props
    this.props.getUnitHeaderImgs(unitName);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.unitName != this.props.unitName) {
      const { unitName } = this.props;
      this.props.getUnitHeaderImgs(unitName);
    }

  }
  render() {
    const { title } = this.props
    const headerImgs = (this.props.headerImgs[0] === undefined ? [{ URL: '' }, { URL: '' }, { URL: '' }, { URL: '' }] : this.props.headerImgs)
    return (
      <section className="check-availability-section">
        <div className="beach-box border-rds h-unset">
          <h1>{title}</h1>
        </div>
        <div className="beach-img-box">
          <button className="take-tour-btn">Take Tour</button>
          <img src={headerImgs[0].URL} className="border-rds large-img" />
        </div>
        <div className="check-availability-gallery hidden-md hidden-sm hidden-xs">
          <div className="beach-img-box">
            <img src={headerImgs[1].URL} className="border-rds small-img" />
          </div>
          <div className="beach-img-box">
            <img src={headerImgs[2].URL}  className="border-rds small-img" />
          </div>
          <div className="beach-img-box">
            <img src={headerImgs[3].URL}  className="border-rds small-img" />
          </div>
        </div>
      </section>
    );
  }
}
const mapStateToProps = state => {

  return {
    headerImgs: state.booking.headerImgs
  };
};

export default connect(mapStateToProps, { getUnitHeaderImgs })(HeaderImages);