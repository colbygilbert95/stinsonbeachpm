import React, { Component } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import FilterOptions from "./FilterOptions/FilterOptions";
import ListingWindow from "./ListingsWindow/ListingWindow";

class Book_Your_Rental extends Component {
  constructor(props) {
    super(props);
    this.state = {
      session: window.localStorage.getItem("session"),
    };
  }

  componentDidMount() {
    setTimeout(() => {
      window.localStorage.removeItem("session");
    }, 2000);
  }
  render() {
    console.log(this.props);
    const { units } = this.props;
    return (
      <div>
        <Header />
        <FilterOptions />
        {this.state.session && (
          <div class="alert alert-success text-center" role="alert">
            {this.state.session}
          </div>
        )}
        <ListingWindow />
        <Footer />
      </div>
    );
  }
}

export default Book_Your_Rental;
