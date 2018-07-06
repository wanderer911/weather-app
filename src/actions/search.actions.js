import { searchConstants } from '../constants';
import { citiesService } from '../services';

export const searchActions = {
    select
}

function select(city){
    const selectedCity = citiesService.addCity(city);
    return dispatch=>{
        if(selectedCity){
            dispatch({type: searchConstants.SELECT,city});
            return;
        }
        dispatch({type: searchConstants.SELECT,city:undefined});
    }
}