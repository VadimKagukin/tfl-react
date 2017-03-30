import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as pageActions from '../actions';

import BusNumber from '../components/enterBusNumber';
import StopList from '../components/stopList';

class App extends Component {

  render() {
    const { busNumber, stops, error, errorMessage } = this.props;
    const { getBusNumber, showStops } = this.props.pageActions;
    return (
      <div className="container">
        <BusNumber getBusNumber={ getBusNumber } showStops={ showStops } />
        <StopList busNumber={ busNumber } stops={ stops } error={ error } errorMessage={ errorMessage } showStops={ showStops } />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    busNumber: state.busNumber.busNumber,
    stops: state.stops.stations,
    error: state.stops.error,
    errorMessage: state.stops.errorMessage,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
