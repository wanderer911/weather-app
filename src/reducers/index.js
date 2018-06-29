import { combineReducers } from 'redux';
import { forecastPeriod } from './forecastPeriod.reducer';
import { alert } from './alert.reducer';
import { scale } from './scale.reducer';


const rootReducer = combineReducers({
    alert,
    forecastPeriod,
    scale
  });
  
  export default rootReducer;