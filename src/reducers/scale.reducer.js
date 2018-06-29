import {scaleConstants } from '../constants';

export function scale(state={scale:'C'},action){

    switch (action.type){
        case scaleConstants.GET:
            return action.scale?{scale:action.scale}:state;
        case scaleConstants.SET:
            return {scale:action.scale};
        default:
            return state;
    }
}