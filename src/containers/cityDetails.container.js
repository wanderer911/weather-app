import React from 'react';
import { cityActions ,forecastActions} from '../actions';
import { connect } from 'react-redux';
import { convertMinMax } from '../helpers';


function convert(to,degree){
    if (to === "F"){
        return degree * 9 / 5 + 32;
    }
    return degree;
}

class CityDetailsContainer extends React.Component {
    componentDidMount(){
        const {getCity,getForecast} = this.props;
        getForecast(getCity(this.props.match.params.place_id));
    }

    render(){
        const {city, forecast,forecast:{list},scale,forecastPeriod} = this.props;
        // const {list} = forecast;
        let data;
        if(list && list.length){
            data = convertMinMax(list,forecastPeriod);
        }
        if (!city || !data){
            return <p>City is not found</p>;
        }
        else if (city && data){
            return(
                <div>
                    <p>{city.formatted_address}</p>
                    {Object.keys(data).map(key=>{
                        return (
                        <div>
                            <p>{ key}. Temp max is  {convert(scale,data[key].main.temp_max).toFixed()}. Temp min is {convert(scale,data[key].main.temp_min).toFixed()}</p>
                            <img src={`http://openweathermap.org/img/w/${data[key].weather[0].icon}.png`}/>
                        </div>);
                    })}
                </div>
            );
        }else{
            return <p> wut </p>;
        }
    }
}

const mapStateToProps = (state) => ({
    city: state.city,
    forecast: state.forecast,
    scale: state.scale,
    forecastPeriod: state.forecastPeriod[0]
});


const mapDispatchToProps = dispatch => ({
    getCity: (place_id) => dispatch(cityActions.getByPlaceId(place_id)),
    getForecast: (city) => dispatch(forecastActions.fetchForecast(city))
});


const connectedCityDetailsContainer = connect(mapStateToProps,mapDispatchToProps)(CityDetailsContainer);
export {connectedCityDetailsContainer as CityDetailsContainer};