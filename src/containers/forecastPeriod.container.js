import React from 'react';
import { connect } from 'react-redux';
import { forecastPeriodActions } from '../actions';

class ForecastPeriodContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {period:props.period};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        const { name, value } = e.target;
        const { dispatch } = this.props;
        this.setState({ [name]: value });
        dispatch(forecastPeriodActions.set(value));
    }

    render(){
        const {period} = state;
        return (
            <div>
                <div className="form-control">
                    <label for="period">SHOW WEATHER FOR</label>
                    <input type="range" name="period"  min="1" max="7" value={period} onChange={this.handleChange}/>
                </div>
            </div>
        );
    }

}


const connectedForecastPeriodContainer = connect()(ForecastPeriodContainer);
export {connectedForecastPeriodContainer as ForecastPeriodContainer};