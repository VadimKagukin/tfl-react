import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

import '../styles/stopList.css';

class StopList extends Component {
  showStopList() {
    const { stops } = this.props;
    return stops.map((stop, index) => {
      return (
        <tr key={ index+100 }>
          <td key={ index } className="index">{ index }</td>
          <td key={ stop.id }>{ stop.name }</td>
        </tr>
      )
    })
  }

  render () {
    return (
      <div>
        {
          !this.props.error
          ? 
            this.props.busNumber > 0
            ? 
              <div>
                <h3>Bus's №{this.props.busNumber} stops list: </h3>
                <Table striped bordered condensed hover>
                  <thead>
                    <tr>
                      <th>№</th>
                      <th>Stop's name</th>
                    </tr>
                  </thead>
                  <tbody>
                    { this.showStopList() }
                  </tbody>
                </Table>
              </div>
            : <h3>Enter the bus number at least 1!</h3>
          : <h3>{this.props.errorMessage}</h3>
        }
      </div>
    )
  }
}

export default StopList;
