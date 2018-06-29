import { scaleConstants } from '../constants';
import { scaleService } from '../services';

export const scaleActions = {
	get,
	set,
};
 
function get() {
    const scale = scaleService.getScale();
    return dispatch=>{
        if(scale){
            dispatch({type: scaleConstants.GET, scale});
            return;
        }
        dispatch({type: scaleConstants.GET, scale:undefined});
    }
}
 
function set(scale) {

    const savedScale = scaleService.setScale(scale);
    return dispatch=>{
        if(savedScale){
            dispatch( { type: scaleConstants.SET, scale });
            return;
        }
        dispatch({ type: scaleConstants.SET, scale:undefined });
    }

}
