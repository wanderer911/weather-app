import React from 'react';
import { connect } from 'react-redux';
import { citiesActions } from '../actions';

class SavedCitiesContainer extends React.Component {
    componentDidMount() {
		const { getCities } = this.props;
        getCities();
	}

    render(){
        const {scale,period,city,cities} = this.props;
        console.log(cities);
        return (
            <div>
                current scale = {scale},
                current forecastPeriod = {period}
                {cities.map(el=>(<p>{el.formatted_address}</p>) )}
            </div>
        )
    }
}



const mapStateToProps = (state) => ({
    city: state.city,
    cities: state.cities
});


const mapDispatchToProps = dispatch => ({
    getCities: () => dispatch(citiesActions.getAllCities())
});


const connectedSavedCitiesContainer = connect(mapStateToProps,mapDispatchToProps)(SavedCitiesContainer);
export {connectedSavedCitiesContainer as SavedCitiesContainer};