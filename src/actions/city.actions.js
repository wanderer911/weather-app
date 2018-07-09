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
        if(deletedCity){
            dispatch({type: cityConstants.DELETE, city: deletedCity});
            return;
        }
        dispatch({type: cityConstants.ADD,city:undefined});
    }

} 

function getByPlaceId(city){
    const selectedCity = citiesService.getCity(city);
    return dispatch=>{
        if(selectedCity){
            dispatch({type: cityConstants.GETBY_PLACEID, city: selectedCity});
            return;
        }
        dispatch({type: cityConstants.GETBY_PLACEID, city: undefined});
    }
}

function addCity(city){
    const selectedCity = citiesService.addCity(city);
    return dispatch=>{
        if(selectedCity){
            dispatch({type: cityConstants.ADD,city});
            return;
        }
        dispatch({type: cityConstants.ADD,city:undefined});
    }
}

