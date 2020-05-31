import React, { Component } from 'react';
import axios from 'axios';
import RightCard from './RightCard';


class WhoIsComing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prices: JSON.parse(window.localStorage.getItem('prices')),
      loading: false
    }
  }
  getClientSecretAndContinue = () => {
    this.setState({loading: true})
    axios.post('https://us-central1-stinsonbeachpm.cloudfunctions.net/app/charge' , {
      chargeAmount: Math.round(this.state.prices.total * 100)
    }).then(res => {
      this.props.nextStep({
        intentSecret: res.data.client_secret
      })
      this.setState({loading: false})
    }).catch(err => {
      console.log(err)
      this.setState({loading: false})
    })
  }
  render() {
    const {loading} = this.state
    return (
      <div className="container mt-40">
        <div className="row">
          <div className="col-md-6">
            <h3 className="roman">Who's Coming</h3>
            <h4 className="number-of-nights">
              Introduce Yourself
            </h4>
            <p>Let us know a little bit about yourself and why you're coming.</p>
            <textarea rows="10" className="mt-15"> </textarea>
            <div className="agree">
              <button onClick={this.getClientSecretAndContinue}>
                {loading ? 
                  <img src="/images/loading.svg" className="loading-icon"/> :
                  'Continue'
                }
              </button>
            </div>
          </div>
          <div className="col-md-6">
            <RightCard></RightCard>        
          </div>
        </div>
      </div>
    );
  }
}

export default WhoIsComing;