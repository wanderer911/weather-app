import {forecastConstants } from '../constants';

export function forecast(state={}, action){
    switch (action.type){
        case forecastConstants.GET_BY_LATLNG:
            if(action.forecast){
                return action.forecast;
            }
            return {};
        default:
            return state;
    }
}