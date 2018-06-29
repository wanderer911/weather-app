import {forecastPeriodConstants } from '../constants';

export function forecastPeriod(state=1,action){
    switch (action.type){
        case forecastPeriodConstants.GET:
        case forecastPeriodConstants.SET:
            return {
                period:action.period
            };
        default:
            return state;
    }
}
