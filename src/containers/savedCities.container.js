import React from 'react';
import { connect } from 'react-redux';
import { citiesActions } from '../actions';
import { CityListItemComponent } from '../components';

class SavedCitiesContainer extends React.Component {
    componentDidMount() {
		const { fetchCities } = this.props;
        fetchCities();
	}

    render(){
        const {scale,period,cities} = this.props;
        return (
            <div>
                <p>current scale = {scale}, current forecastPeriod = {period}</p>
                {cities.map(el=><CityListItemComponent city={el}/>)}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    cities: state.cities
});


const mapDispatchToProps = dispatch => ({
    fetchCities: () => dispatch(citiesActions.getAllCities())
});


const connectedSavedCitiesContainer = connect(mapStateToProps,mapDispatchToProps)(SavedCitiesContainer);
export {connectedSavedCitiesContainer as SavedCitiesContainer};