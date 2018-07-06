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
    console.log(e);
    const success = period=>({ type: forecastPeriodConstants.SET, period });
    return dispatch=>{
        forecastPeriodService.setForecastPeriod(
            e
            //e.target.value
        );
        dispatch(success(
            e
            //e.target.value
        ));
    };
}