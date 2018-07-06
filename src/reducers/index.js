import { combineReducers } from 'redux';
import { forecastPeriod } from './forecastPeriod.reducer';
import { alert } from './alert.reducer';
import { scale } from './scale.reducer';
import {search } from './search.reducer';


const rootReducer = combineReducers({
    alert,
    forecastPeriod,
    scale,
    search
  });
  
  export default rootReducer;