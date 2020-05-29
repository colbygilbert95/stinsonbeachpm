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
            <img src="/images/back-arrow.png"/>
          </a>
        </div>
      </div>
    )
  }
}

export default withRouter(ListingImagesDetails)
