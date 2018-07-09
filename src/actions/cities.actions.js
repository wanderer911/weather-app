import {citiesService} from '../services';
import {citiesConstants} from '../constants';


export const citiesActions = {
    getAllCities,
    deleteAllCities
};


function getAllCities(){
    const allCities = citiesService.getCities();
    return dispatch=>{
        if(allCities.length){
            dispatch({type: citiesConstants.GET_ALL,cities:allCities})
            return;
        }
        dispatch({type: citiesConstants.GET_ALL,cities:undefined});
    }
}

function deleteAllCities(){
    //TODO
}