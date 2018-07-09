import { citiesConstants} from '../constants';

export function cities(state=[],action){
    switch (action.type){
        case citiesConstants.GET_ALL:
            return action.cities.length?action.cities:state;
        default:
            return state; 
    }
}