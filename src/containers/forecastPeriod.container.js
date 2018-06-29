import React from 'react';
import { connect } from 'react-redux';
import { forecastPeriodActions } from '../actions';
import { ForecastPeriodComponent } from '../components';

class ForecastPeriodContainer extends React.Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

	componentDidMount() {
        this.props.dispatch(forecastPeriodActions.get());

    }

    handleChange(e){
        const { value } = e.target;
        const { dispatch } = this.props;
        dispatch(forecastPeriodActions.set(value));
    }

    render(){
        const {forecastPeriod} = this.props;
        return (
            <ForecastPeriodComponent onPeriodChange={this.handleChange} period={forecastPeriod.period}/>
        );
    }
}

function mapStateToProps(state) {
	const { forecastPeriod } = state;
	return {
		forecastPeriod
	};
}


const connectedForecastPeriodContainer = connect(mapStateToProps)(ForecastPeriodContainer);
export {connectedForecastPeriodContainer as ForecastPeriodContainer};