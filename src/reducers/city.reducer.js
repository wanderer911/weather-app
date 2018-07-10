import { cityConstants} from '../constants';

export function city(state={},action){

    switch (action.type){
        case cityConstants.ADD:
        case cityConstants.DELETE:
        case cityConstants.GETBY_PLACEID:
            return action.city?action.city:{};
        default:
            return state;
    }
}