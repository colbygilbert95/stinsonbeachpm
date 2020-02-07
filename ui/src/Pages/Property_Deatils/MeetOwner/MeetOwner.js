import React, { Component } from 'react';

class MeetOwner extends Component {
    state = {  }
    render() { 
        return ( <section className="meet-the-owner">
        <div className="container-fluid">
          <hr />
          <div className="row">
            <div className="col-sm-12">
              <div className="rent-title">
                <h3 className="title text-left">Meet the Owner</h3>
              </div>
            </div>
          </div>
          <div className="row mb-40">
            <div className="col-sm-9">
              <div className="meet-box">
                <div className="row">
                  <div className="col-sm-3">
                    <div className="meet-img-box"></div>
                  </div>
                  <div className="col-sm-9">
                    <div className="meet-coment">
                      <p className="mtb-15">
                        <strong>Hi, Iʼm Stinson,</strong>
                      </p>
                      <p>
                        Stinson Beach is a quiet seaside town popular for its
                        calm surf, smooth sand, and miles of mountain trails.
                        The beach bungalow set on the hillside with wooden and
                        stone stairs to arrive. Worth the trek, but if you
                        have a bad knee, a tricky ankle or a hitch in your
                        get-along, this is not the property for you.{" "}
                      </p>
                      <p>
                        Stinson Beach is a quiet seaside town popular for its
                        calm surf, smooth sand, and miles of mountain trails.
                        The beach bungalow set on the hillside with wooden and
                        stone stairs to arrive. Worth the trek, but if you
                        have a bad knee, a tricky ankle or a hitch in your
                        get-along, this is not the property for you.{" "}
                      </p>
                      <p>
                        Stinson Beach is a quiet seaside town popular for its
                        calm surf, smooth sand, and miles of mountain trails.
                        The beach bungalow set on the hillside with wooden and
                        stone stairs to arrive. Worth the trek, but if you
                        have a bad knee, a tricky ankle or a hitch in your
                        get-along, this is not the property for you.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="meet-box meet-box-contact">
                <p>
                  <strong>Joined:</strong> September 2014
                </p>
                <p>
                  <strong>Response rate:</strong> 100%{" "}
                </p>
                <p>
                  <strong>Response time:</strong> within an hour
                </p>
                <p className="contact-with-owner-btn">
                  <a href="#">Contact with Owner</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> );
    }
}
 
export default MeetOwner;