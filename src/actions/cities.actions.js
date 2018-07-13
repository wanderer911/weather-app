import {citiesService} from '../services';
import {citiesConstants} from '../constants';


export const citiesActions = {
    getAllCities,
    deleteAllCities
};


function getAllCities(){
    const allCities = citiesService.getCities();
    return dispatch=>{
        dispatch({type: citiesConstants.GET_ALL,cities:allCities});
    }
}

function deleteAllCities(){
    //TODO
}