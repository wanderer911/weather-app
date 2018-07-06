import { scaleConstants } from '../constants';
import { scaleService } from '../services';

export const scaleActions = {
	get,
	toggle,
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
 
function toggle() {
    return (dispatch, getState)=>{
        const scale = getState().scale;
        const newScale = scale.scale === 'C' ? 'F' : 'C';
        scaleService.setScale(newScale);
        dispatch( { type: scaleConstants.SET, scale: newScale });
    }

}
