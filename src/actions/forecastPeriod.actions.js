import { forecastPeriodConstants } from '../constants';
import { forecastPeriodService } from '../services';

export const forecastPeriodActions = {
	get,
	set,
};
 
function get(){
    const success = period =>({ type: forecastPeriodConstants.GET, period });
    return dispatch=>{
        const period = forecastPeriodService.getForecastPeriod();
        dispatch(success(period));
    };
}

function set(e){
    const success = period=>({ type: forecastPeriodConstants.SET, period });
    return dispatch=>{
        forecastPeriodService.setForecastPeriod(e.target.value);
        dispatch(success(e.target.value));
    };
}