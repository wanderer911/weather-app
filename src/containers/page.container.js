import React from 'react';
import { forecastPeriodActions, scaleActions, searchActions } from '../actions';
import {ForecastPeriodComponent, ScaleComponent } from '../components';
import { SearchContainer } from './';
import { connect } from 'react-redux';

class Page extends React.Component {
	componentDidMount() {
		const { getPeriod, getScale } = this.props;
		getPeriod();
		getScale();
	}

	render(){
		const {forecastPeriod, search, scale, onPeriodChange, onScaleChange} = this.props;
		return (
			<div>
				<SearchContainer/>
				<ForecastPeriodComponent onPeriodChange={onPeriodChange} period={forecastPeriod}/>
				<ScaleComponent onScaleChange={onScaleChange} scale={scale}/>
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
	getScale: () => dispatch(scaleActions.get()) 
});

const connectedPage = connect(mapStateToProps, mapDispatchToProps)(Page);
export {connectedPage as Page};