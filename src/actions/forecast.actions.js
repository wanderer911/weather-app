import { forecastConstants } from '../constants';
import { forecastPeriodService } from '../services';


export const forecastActions = {
	fetchForecast,
};

function fetchForecast(){
    return async (dispatch,getState)=>{
        const {lat, lng} = getState().city.latLng;
        const { scale } = getState().scale ==='C'?'metric':'imperial';
        const forecast = await forecastPeriodService.getForecastByLatLng(lat, lng,scale);
        dispatch({ type: forecastConstants.GET_BY_LATLNG, forecast });
    }
}