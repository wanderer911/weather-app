// import React from 'react';
// import { connect } from 'react-redux';

// import { ForecastPeriodComponent } from '../components';

// class ForecastPeriodContainer extends React.Component {
//     constructor(props){
//         super(props);
//         this.handleChange = this.handleChange.bind(this);
//     }

// 	componentDidMount() {
//         this.props.dispatch(forecastPeriodActions.get());
//     }

//     handleChange(e){
//         const { value } = e.target;
//         this.props.dispatch(forecastPeriodActions.set(value));
//     }

//     render(){
//         const {period} = this.props.forecastPeriod;
//         return ('');
//     }
// }

// function mapStateToProps(state) {
// 	const { forecastPeriod } = state;
// 	return {
// 		forecastPeriod
// 	};
// }


// const connectedForecastPeriodContainer = connect(mapStateToProps)(ForecastPeriodContainer);
// export {connectedForecastPeriodContainer as ForecastPeriodContainer};


