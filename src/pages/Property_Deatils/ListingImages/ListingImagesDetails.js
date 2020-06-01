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
  showGallery = (e) => {
    e.preventDefault()
    this.props.history.push('/gallery')
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
              <div className="col-md-4"><a href="#" onClick={(e) => this.showGallery(e)} className="black-screen"></a></div>
              <div className="col-md-8"><a href="#" onClick={(e) => this.showGallery(e)} className="black-screen"></a></div>
            </div>
            <div className="row">
              <div className="col-md-6"><a href="#" onClick={(e) => this.showGallery(e)} className="black-screen"></a></div>
              <div className="col-md-6"><a href="#" onClick={(e) => this.showGallery(e)} className="black-screen"></a></div>
            </div>
          </div>
          <div className="list">
            <h1>Full Bathroom</h1>
            <div className="row">
              <div className="col-md-7"><a href="#" onClick={(e) => this.showGallery(e)} className="black-screen"></a></div>
              <div className="col-md-5"><a href="#" onClick={(e) => this.showGallery(e)} className="black-screen"></a></div>
            </div>
            <div className="row">
              <div className="col-md-4"><a href="#" onClick={(e) => this.showGallery(e)} className="black-screen"></a></div>
              <div className="col-md-4"><a href="#" onClick={(e) => this.showGallery(e)} className="black-screen"></a></div>
              <div className="col-md-4"><a href="#" onClick={(e) => this.showGallery(e)} className="black-screen"></a></div>
            </div>
          </div>
          <div className="list">
            <h1>Half Bathroom</h1>
            <div className="row">
              <div className="col-md-12"><a href="#" onClick={(e) => this.showGallery(e)} className="black-screen"></a></div>
            </div>
            <div className="row">
              <div className="col-md-4"><a href="#" onClick={(e) => this.showGallery(e)} className="black-screen"></a></div>
              <div className="col-md-4"><a href="#" onClick={(e) => this.showGallery(e)} className="black-screen"></a></div>
              <div className="col-md-4"><a href="#" onClick={(e) => this.showGallery(e)} className="black-screen"></a></div>
            </div>
          </div>
          <div className="list">
            <h1>Entry</h1>
            <div className="row">
              <div className="col-md-12"><a href="#" onClick={(e) => this.showGallery(e)} className="black-screen"></a></div>
            </div>
            <div className="row">
              <div className="col-md-7"><a href="#" onClick={(e) => this.showGallery(e)} className="black-screen"></a></div>
              <div className="col-md-5"><a href="#" onClick={(e) => this.showGallery(e)} className="black-screen"></a></div>
            </div>
          </div>
          <div className="list">
            <h1>Bedroom Area</h1>
            <div className="row">
              <div className="col-md-12"><a href="#" onClick={(e) => this.showGallery(e)} className="black-screen"></a></div>
            </div>
            <div className="row">
              <div className="col-md-5"><a href="#" onClick={(e) => this.showGallery(e)} className="black-screen"></a></div>
              <div className="col-md-7"><a href="#" onClick={(e) => this.showGallery(e)} className="black-screen"></a></div>
            </div>
          </div>
          <div className="list">
            <h1>Exterior</h1>
            <div className="row">
              <div className="col-md-12"><a href="#" onClick={(e) => this.showGallery(e)} className="black-screen"></a></div>
            </div>
            <div className="row">
              <div className="col-md-4"><a href="#" onClick={(e) => this.showGallery(e)} className="black-screen"></a></div>
              <div className="col-md-4"><a href="#" onClick={(e) => this.showGallery(e)} className="black-screen"></a></div>
              <div className="col-md-4"><a href="#" onClick={(e) => this.showGallery(e)} className="black-screen"></a></div>
            </div>
          </div>
          <div className="list">
            <h1>Outdoor Space</h1>
            <div className="row">
              <div className="col-md-12"><a href="#" onClick={(e) => this.showGallery(e)} className="black-screen"></a></div>
            </div>
            <div className="row">
              <div className="col-md-6"><a href="#" onClick={(e) => this.showGallery(e)} className="black-screen"></a></div>
              <div className="col-md-6"><a href="#" onClick={(e) => this.showGallery(e)} className="black-screen"></a></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(ListingImagesDetails)