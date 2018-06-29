// import { forecastPeriodConstants } from '../constants';
// import { scaleService } from '../services';

// export const scaleActions = {
// 	getScale,
// 	setScale,
// };
 
// function getScale() {

//     //get the current scale
//     // const scales = ['Celcius','Fahrenheit'];
//     //getCurrent scale localStorage.get current state if not current. set it as celcius and return celcius.
//     const scale = scaleService.getScale();
//     if(scale){
//         dispatch({type: scaleConstants.GET, scale});
//         return;
//     }
//     dispatch({type: scaleConstants.GET, scale:undefined});
// }
 
// function setScale(scale) {
//     //set the current scale.
//     //localstorate set current state
//     const savedScale = scaleService.setScale(scale);
//     if(savedScale){
//         dispatch( { type: scaleConstants.SET, scale });
//         return;
//     }
// 	dispatch({ type: scaleConstants.SET, scale:undefined });
// }
