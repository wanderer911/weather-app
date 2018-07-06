import {scaleConstants } from '../constants';

export function scale(state='C',action){

    switch (action.type){
        case scaleConstants.GET:
            return action.scale?action.scale:state;
        case scaleConstants.SET:
            return action.scale;
        default:
            return state;
    }
}