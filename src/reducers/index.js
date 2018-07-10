import { combineReducers } from 'redux';
import { forecastPeriod } from './forecastPeriod.reducer';
import { alert } from './alert.reducer';
import { scale } from './scale.reducer';
import { city } from './city.reducer';
import { cities } from './cities.reducer';
import { forecast } from './forecast.reducer';

const rootReducer = combineReducers({
    alert,
    forecastPeriod,
    scale,
    city,
    cities,
    forecast
  });
  
  export default rootReducer;