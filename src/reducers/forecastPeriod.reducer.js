import {forecastPeriodConstants } from '../constants';

export function forecastPeriod(state=[1],action){
    switch (action.type){
        case forecastPeriodConstants.GET:
            if(action.period){
                return action.period;
            }
            return state;
        case forecastPeriodConstants.SET:
            return action.period;
        default:
            return state;
    }
}
