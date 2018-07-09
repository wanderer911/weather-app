import React, { Component } from 'react';

import { Router, Route, NavLink, Switch  } from 'react-router-dom';
import { history } from './helpers';
import { connect } from 'react-redux';
import styles from './App.css';
import { forecastPeriodActions, scaleActions } from './actions';
import {ForecastPeriodComponent, ScaleComponent } from './components';
import { SearchContainer, SavedCitiesContainer } from './containers';


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
          <div className="router">
            <nav className="navbar navbar-expand-md navbar-dark mb-4 my-nav">
              <NavLink to="/" >Start</NavLink>
              <NavLink to="/saved-cities" className="navbar-brand my-navlink">Saved cities</NavLink>
            </nav>
            <Switch>
              <Route exact path="/" component={SearchContainer} />
              <PropsRoute path="/saved-cities" component={SavedCitiesContainer} period={forecastPeriod} scale={scale}/>
            </Switch>
          </div>
        </Router>
        <ScaleComponent onScaleChange={onScaleChange} scale={scale}/>
        <ForecastPeriodComponent onPeriodChange={onPeriodChange} period={forecastPeriod}/>

      </div>
    );
  }
}

const renderMergedProps = (component, ...rest) => {
  const finalProps = Object.assign({}, ...rest);
  return (
    React.createElement(component, finalProps)
  );
}

const PropsRoute = ({ component, ...rest }) => {
  return (
    <Route {...rest} render={routeProps => {
      return renderMergedProps(component, routeProps, rest);
    }}/>
  );
};


const mapStateToProps = (state) => ({
	scale: state.scale,
	forecastPeriod: state.forecastPeriod,
	cities: state.cities
});

const mapDispatchToProps = dispatch => ({
	onPeriodChange: (e) => dispatch(forecastPeriodActions.set(e)),
	getPeriod: () => dispatch(forecastPeriodActions.get()),
	onScaleChange: () => dispatch(scaleActions.toggle()),
	fetchScale: () => dispatch(scaleActions.get()) 
});

const connectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
export { connectedApp as App };
