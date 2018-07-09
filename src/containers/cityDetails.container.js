import React from 'react';
import { cityActions } from '../actions';
import { connect } from 'react-redux';

class CityDetailsContainer extends React.Component {
    componentDidMount(){
        const {getCity} = this.props;
        getCity(this.props.match.params.place_id);
    }
    render(){
        const {city} = this.props;
        console.log(city);
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
    city: state.city
});


const mapDispatchToProps = dispatch => ({
    getCity: (place_id) => dispatch(cityActions.getByPlaceId(place_id))
});


const connectedCityDetailsContainer = connect(mapStateToProps,mapDispatchToProps)(CityDetailsContainer);
export {connectedCityDetailsContainer as CityDetailsContainer};