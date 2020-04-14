import React, { Component } from "react";

class GuestCalculator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      calculatorState: false,
      items: [
        { title: 'Adults', value: 0 },
        { title: 'Children', info: 'Ages 2-12', value: 0 },
        { title: 'Infants', info: 'Under 2', value: 0 }
      ]
    }
  }
  increaseItem = (item) => {
    item.value++;
    this.setState({ items: this.state.items })
  }
  decreaseItem = (item) => {
    if (item.value > 0) {
      item.value--
      this.setState({ items: this.state.items })
    }
  }
  render() {
    return (
      <div className="guests-calculator-wrapper">
        <div className="input-wrapper">
          <div className="chips-list">
            {this.state.items.filter(item => item.value > 0).map(item =>
              <div className="chip">{item.value + ' ' + item.title}</div>

            )}
          </div>
          <button className="collapse-btn" onClick={() => { this.setState({ calculatorState: !this.state.calculatorState }) }}><i className={this.state.calculatorState ? 'fa fa-caret-up' : 'fa fa-caret-down'}></i></button>
          <input className="guests-input" type="text" onFocus={() => { this.setState({ calculatorState: true }) }} />
        </div>
        {
          this.state.calculatorState &&
          <div className="calculator">
            {this.state.items.map(item => {
              return (
                <div className="calculator-item">
                  <div className="calculator-item-title">{item.title}</div>
                  <div className="increamenter">
                    <button className="minus" onClick={() => { this.decreaseItem(item) }}>
                      <i class="fa fa-minus"></i>
                    </button>
                    <div className="counter">{item.value}</div>
                    <button className="plus" onClick={() => { this.increaseItem(item) }}>
                      <i className="fa fa-plus"></i>
                    </button>
                  </div>
                </div>
              )
            })}
            <div className="tip">
              2 guests maximum. Infants don't count toward the number of guests.
            </div>
            <div className="close-btn" >
              <button onClick={() => { this.setState({ calculatorState: false }) }}>Close</button>
            </div>
          </div>
        }
      </div>
    )
  }
}

export default GuestCalculator