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
        let element;
        if(cities.length){
            element = cities.map(el=><CityListItemComponent city={el}/>);
        }else {
            element = <p>No cities has been added yet</p>;
        }
        return (
            <div>
                <p>current scale = {scale}, current forecastPeriod = {period}</p>
                {element}
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