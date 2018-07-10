import {forecastConstants } from '../constants';

export function forecast(state={}, action){
    console.log(action.type)
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