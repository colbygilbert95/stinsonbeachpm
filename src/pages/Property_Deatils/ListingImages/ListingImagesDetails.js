import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

export class ListingImagesDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  returnBack = (e) => {
    e.preventDefault()
    this.props.history.goBack()
  }
  render() {
    return (
      <div className="listing-details-wrapper">
        <div className="header">
          <a href="#" className="back-button" onClick={this.returnBack}>
            <img src="/images/back-arrow.png" />
          </a>
        </div>
        <div className="container">
          <div className="list">
            <h1>Full Kitchen</h1>
            <div className="row">
              <div className="col-md-4"><div className="black-screen"></div></div>
              <div className="col-md-8"><div className="black-screen"></div></div>
            </div>
            <div className="row">
              <div className="col-md-6"><div className="black-screen"></div></div>
              <div className="col-md-6"><div className="black-screen"></div></div>
            </div>
          </div>
          <div className="list">
            <h1>Full Bathroom</h1>
            <div className="row">
              <div className="col-md-7"><div className="black-screen"></div> </div>
              <div className="col-md-5"><div className="black-screen"></div> </div>
            </div>
            <div className="row">
              <div className="col-md-4"><div className="black-screen"></div> </div>
              <div className="col-md-4"><div className="black-screen"></div> </div>
              <div className="col-md-4"><div className="black-screen"></div> </div>
            </div>
          </div>
          <div className="list">
            <h1>Half Bathroom</h1>
            <div className="row">
              <div className="col-md-12"><div className="black-screen"></div> </div>
            </div>
            <div className="row">
              <div className="col-md-4"><div className="black-screen"></div> </div>
              <div className="col-md-4"><div className="black-screen"></div> </div>
              <div className="col-md-4"><div className="black-screen"></div> </div>
            </div>
          </div>
          <div className="list">
            <h1>Entry</h1>
            <div className="row">
              <div className="col-md-12"><div className="black-screen"></div></div>
            </div>
            <div className="row">
              <div className="col-md-7"><div className="black-screen"></div> </div>
              <div className="col-md-5"><div className="black-screen"></div> </div>
            </div>
          </div>
          <div className="list">
            <h1>Bedroom Area</h1>
            <div className="row">
              <div className="col-md-12"><div className="black-screen"></div></div>
            </div>
            <div className="row">
              <div className="col-md-5"><div className="black-screen"></div> </div>
              <div className="col-md-7"><div className="black-screen"></div> </div>
            </div>
          </div>
          <div className="list">
            <h1>Exterior</h1>
            <div className="row">
              <div className="col-md-12"><div className="black-screen"></div> </div>
            </div>
            <div className="row">
              <div className="col-md-4"><div className="black-screen"></div> </div>
              <div className="col-md-4"><div className="black-screen"></div> </div>
              <div className="col-md-4"><div className="black-screen"></div> </div>
            </div>
          </div>
          <div className="list">
            <h1>Outdoor Space</h1>
            <div className="row">
              <div className="col-md-12"><div className="black-screen"></div> </div>
            </div>
            <div className="row">
              <div className="col-md-6"><div className="black-screen"></div></div>
              <div className="col-md-6"><div className="black-screen"></div></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(ListingImagesDetails)