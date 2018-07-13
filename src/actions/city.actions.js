import { cityConstants, citiesConstants} from '../constants';
import { citiesService } from '../services';


export const cityActions = {
    deleteCity,
    getByPlaceId,
    addCity
};


function deleteCity(city){
    const deletedCity = citiesService.removeCity(city);
    return dispatch=>{
        dispatch({type: cityConstants.DELETE, city: deletedCity});
    };
} 

function getByPlaceId(placeId){
    const selectedCity = citiesService.getCity(placeId);
    return dispatch=>{
        dispatch({type: cityConstants.GETBY_PLACEID, city: selectedCity});
    };
}

function addCity(city){
    const selectedCity = citiesService.addCity(city);
    return dispatch=>{
        if(selectedCity){
            dispatch({type: cityConstants.ADD,city});
            return;
        }
        dispatch({type: cityConstants.ADD});
    };
}

