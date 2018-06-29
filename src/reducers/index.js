import { combineReducers } from 'redux';
import { forecastPeriod } from './forecastPeriod.reducer';
import { alert } from './alert.reducer';

const rootReducer = combineReducers({
    alert,
    forecastPeriod
  });
  
  export default rootReducer;