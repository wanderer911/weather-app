import { forecastConstants } from '../constants';
import { forecastPeriodService } from '../services';


export const forecastActions = {
	fetchForecast,
};

function fetchForecast(){
    return async (dispatch,currentState)=>{
        const {lat, lng} = currentState().city.latLng;
        try{
            const forecast = await forecastPeriodService.getForecastByLatLng(lat, lng);
            dispatch({ type: forecastConstants.GET_BY_LATLNG, forecast:forecast });
        } catch (e){
            console.log(e);
            dispatch({ type: forecastConstants.GET_BY_LATLNG });
        }
    }
}