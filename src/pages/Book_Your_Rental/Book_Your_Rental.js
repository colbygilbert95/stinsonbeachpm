import React, { Component } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {
  NavLink,
} from "react-router-dom";
import { connect } from "react-redux";
import FilterOptions from "./FilterOptions/FilterOptions";
import ListingWindow from "./ListingsWindow/ListingWindow";

class Book_Your_Rental extends Component {

  render() {
    console.log(this.props);
    const { units } = this.props;
    return (
      <div>
        <Header />
        <FilterOptions />
        <ListingWindow />
        <Footer />
      </div>
    );
  }
}


export default Book_Your_Rental;
