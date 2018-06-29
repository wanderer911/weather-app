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

function set(period){
    const success = period=>({ type: forecastPeriodConstants.SET, period });
    return dispatch=>{
        forecastPeriodService.setForecastPeriod(period);
        dispatch(success(period));
    };
}