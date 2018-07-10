import React from 'react';
import { cityActions ,forecastActions} from '../actions';
import { connect } from 'react-redux';

class CityDetailsContainer extends React.Component {
    componentDidMount(){
        const {getCity,getForecast} = this.props;
        getForecast(getCity(this.props.match.params.place_id));
    }

    render(){
        const {city, forecast, getForecast} = this.props;
        if (!city){
            return <p>City is not found</p>;
        }
        return(
            <div>
                <p>{city.formatted_address}</p>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    city: state.city,
    forecast: state.forecast
});


const mapDispatchToProps = dispatch => ({
    getCity: (place_id) => dispatch(cityActions.getByPlaceId(place_id)),
    getForecast: (city) => dispatch(forecastActions.fetchForecast(city))
});


const connectedCityDetailsContainer = connect(mapStateToProps,mapDispatchToProps)(CityDetailsContainer);
export {connectedCityDetailsContainer as CityDetailsContainer};