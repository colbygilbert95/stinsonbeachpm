import React, { Component } from 'react';

class HeaderImages extends Component {
    state = {  }
    render() { 
        const {title} = this.props
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
                <img src="images/bed.jpg" className="border-rds" />
              </div>
            </div>
            <div className="col-sm-2">
              <div className="row">
                <div className="col-sm-12 mb-15">
                  <div className="beach-img-box">
                    <img src="images/bed-1.jpg" className="border-rds" />
                  </div>
                </div>
                <div className="col-sm-12 mb-15">
                  <div className="beach-img-box">
                    <img src="images/bed-2.jpg" className="border-rds" />
                  </div>
                </div>
                <div className="col-sm-12 mb-15">
                  <div className="beach-img-box">
                    <img src="images/bed-3.jpg" className="border-rds" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> );
    }
}
 
export default HeaderImages;