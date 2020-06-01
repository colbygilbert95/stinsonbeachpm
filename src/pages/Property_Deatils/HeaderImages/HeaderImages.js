import React, { Component } from 'react';
import { getUnitHeaderImgs } from "../../../store/actions/bookingActions"
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'

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
  showGallery = (e) => {
    e.preventDefault()
    this.props.history.push('/gallery')
  }
  render() {
    const { title } = this.props
    const headerImgs = (this.props.headerImgs[0] === undefined ? [{ URL: '' }, { URL: '' }, { URL: '' }, { URL: '' }] : this.props.headerImgs)
    return (
      <section className="check-availability-section">
        <div className="beach-box border-rds h-unset">
          <h1 className="roman">{title}</h1>
        </div>
        <div className="beach-img-box">
          <button className="take-tour-btn">Take Tour</button>
          <a href="#" onClick={(e) => this.showGallery(e)}>
            <img src={headerImgs[0].URL} className="border-rds large-img" />
          </a>
        </div>
        <div className="check-availability-gallery hidden-md hidden-sm hidden-xs">
          <div className="beach-img-box">
            <a href="#" onClick={(e) => this.showGallery(e)}>
              <img src={headerImgs[1].URL} className="border-rds small-img" />
            </a>
          </div>
          <div className="beach-img-box">
            <a href="#" onClick={(e) => this.showGallery(e)}>
              <img src={headerImgs[2].URL}  className="border-rds small-img" />
            </a>
          </div>
          <div className="beach-img-box">
            <a href="#" onClick={(e) => this.showGallery(e)}>
              <img src={headerImgs[3].URL}  className="border-rds small-img" />
            </a>
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

export default withRouter(connect(mapStateToProps, { getUnitHeaderImgs })(HeaderImages))