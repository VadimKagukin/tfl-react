import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import '../styles/enterBusNumber.css';

class BusNumber extends Component {

  onBtnClick() {
    let numb = parseInt(this.numberInput.value, 10);
    this.props.getBusNumber(numb);
    this.numberInput.value = '';
    this.props.showStops(numb);
  }

  render() {
    return (
      <div className="busNumber">
        <label htmlFor="busNumberInput">Enter a bus number</label><br/>
        <input className="form-control" type="text" id="busNumberInput" placeholder="Bus number..." ref={ (input) => this.numberInput = input } />
        <Button onClick={ this.onBtnClick.bind(this) }>Enter</Button>
      </div>
    );
  }
}

export default BusNumber;