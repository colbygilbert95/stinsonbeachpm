import React, { Component } from "react";

class FilterOptions extends Component {
  //state = {  }
  render() {
    return (
      <section className="book-your--top">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-9">
              <ul className="single-post-link mt-0">
                <li>
                  <a href="#">Date</a>
                </li>
                <li>
                  <a href="#">Guests</a>
                </li>
                <li>
                  <a href="#">Price</a>
                </li>
                <li>
                  <a href="#">Type of Place</a>
                </li>
                <li>
                  <a href="#">More Filters</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-3">
              <div className="Show-Map-btn">
                <span>Show Map</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default FilterOptions;
