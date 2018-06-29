import React, { Component } from 'react';
import { ForecastPeriodContainer } from './containers';
import { Router, Route, NavLink, Switch  } from 'react-router-dom';
import { history } from './helpers';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={history}>
          <Switch>
            <Route component={ForecastPeriodContainer} />
          </Switch>
        </Router>
      </div>
    );
  }
}

const connectedApp = connect()(App);
export { connectedApp as App };
