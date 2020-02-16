import React, { Component } from 'react';
import { getActiveUnits } from "../../../store/actions/bookingActions";
import { connect } from "react-redux";
import ListingCard from './ListingCard/ListingCard';

class ListingWindow extends Component {
    componentDidMount() {
        this.props.getActiveUnits();
      }
    render() { 
        const { units } = this.props
        return ( 
        <section className="book-rental-inner">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="rent-title">
                <h3 className="title text-left">Top Rated Places to Stay</h3>
              </div>
            </div>
                {units.map((unit, index) => {
                    return(<ListingCard unitData={unit} key={index}/>)
                }) }
            </div>
          </div>
        </section> );
    }
}
const mapStateToProps = state => {

  return {
    units: state.booking.units
  };
};

export default connect(mapStateToProps, { getActiveUnits })(ListingWindow);