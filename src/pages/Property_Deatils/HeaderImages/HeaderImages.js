import React, { Component } from 'react';
import { getUnitHeaderImgs } from "../../../store/actions/bookingActions"
import { connect } from "react-redux";
class HeaderImages extends Component {
  componentDidMount() {
    const {unitName} = this.props
    this.props.getUnitHeaderImgs(unitName);
  }
  componentDidUpdate(prevProps) {
    if(prevProps.unitName != this.props.unitName) {
      const { unitName } = this.props;
      this.props.getUnitHeaderImgs(unitName);
    }

  }
    render() { 
        const {title} = this.props
        const headerImgs = (this.props.headerImgs[0] === undefined? [{URL:''},{URL:''},{URL:''},{URL:''}] : this.props.headerImgs)
        console.log("headerImgs")
        console.log(headerImgs)
        return ( <section className="check-availability">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-4">
              <div className="beach-box border-rds">
                <h1>{title}</h1>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="beach-img-box">
                <img src={headerImgs[0].URL} className="border-rds" />
              </div>
            </div>
            <div className="col-sm-2">
              <div className="row">
                <div className="col-sm-12 mb-15">
                  <div className="beach-img-box">
                    <img src={headerImgs[1].URL} className="border-rds" />
                  </div>
                </div>
                <div className="col-sm-12 mb-15">
                  <div className="beach-img-box">
                    <img src={headerImgs[2].URL} className="border-rds" />
                  </div>
                </div>
                <div className="col-sm-12 mb-15">
                  <div className="beach-img-box">
                    <img src={headerImgs[3].URL} className="border-rds" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> );
    }
}
const mapStateToProps = state => {

  return {
    headerImgs: state.booking.headerImgs
  };
};

export default connect(mapStateToProps, { getUnitHeaderImgs })(HeaderImages);