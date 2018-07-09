import { combineReducers } from 'redux';
import { forecastPeriod } from './forecastPeriod.reducer';
import { alert } from './alert.reducer';
import { scale } from './scale.reducer';
// import {search } from './search.reducer';
import { city } from './city.reducer';
import { cities } from './cities.reducer';

const rootReducer = combineReducers({
    alert,
    forecastPeriod,
    scale,
    city,
    cities
  });
  
  export default rootReducer;