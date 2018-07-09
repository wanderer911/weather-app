import React, { Component } from 'react';
// import { Page } from './containers';
import { Router, Route, NavLink, Switch  } from 'react-router-dom';
import { history } from './helpers';
import { connect } from 'react-redux';
import styles from './App.css';
import { forecastPeriodActions, scaleActions } from './actions';
import {ForecastPeriodComponent, ScaleComponent } from './components';
import { SearchContainer } from './containers';

class App extends Component {

	componentDidMount() {
		const { getPeriod, fetchScale } = this.props;
		getPeriod();
		fetchScale();
	}

  render() {
    const {forecastPeriod, scale, onPeriodChange, onScaleChange} = this.props;
    return (
      <div className="container">
        <Router history={history}>
          <Switch>
            <Route component={SearchContainer} />
          </Switch>
        </Router>
        <ScaleComponent onScaleChange={onScaleChange} scale={scale}/>
        <ForecastPeriodComponent onPeriodChange={onPeriodChange} period={forecastPeriod}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
	scale: state.scale,
	forecastPeriod: state.forecastPeriod,
	search: state.search
})

const mapDispatchToProps = dispatch => ({
	onPeriodChange: (e) => dispatch(forecastPeriodActions.set(e)),
	getPeriod: () => dispatch(forecastPeriodActions.get()),
	onScaleChange: () => dispatch(scaleActions.toggle()),
	fetchScale: () => dispatch(scaleActions.get()) 
});

const connectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
export { connectedApp as App };
