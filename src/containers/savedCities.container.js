import React from 'react';
import { connect } from 'react-redux';
import { citiesActions } from '../actions';
import { CityListItemComponent } from '../components';

class SavedCitiesContainer extends React.Component {
    componentDidMount() {
		const { getCities } = this.props;
        getCities();
	}

    render(){
        const {scale,period,cities} = this.props;
        console.log(cities);
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
    getCities: () => dispatch(citiesActions.getAllCities())
});


const connectedSavedCitiesContainer = connect(mapStateToProps,mapDispatchToProps)(SavedCitiesContainer);
export {connectedSavedCitiesContainer as SavedCitiesContainer};