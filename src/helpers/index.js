export * from './history';
export * from './store';

export function convertMinMax(list,period){
    if(list && list.length){
        const medium = {};
        const final = {}
        const daysList = {};
        list.forEach((item)=>{
            const d = new Date(item.dt * 1000);
            const day = d.getDate();
            if(!daysList[day]){
                daysList[day]= [item]
            }else{
                daysList[day].push(item);
            }
        });
        for(let prop in daysList){
            medium[prop] = daysList[prop].reduce((accumulator,currentValue)=>{
                const copy = {...accumulator};
                if(accumulator.main.temp_min > currentValue.main.temp_min){
                    copy.main.temp_min = currentValue.main.temp_min;
                }
                if(accumulator.main.temp_max < currentValue.main.temp_max){
                    copy.main.temp_max = currentValue.main.temp_max;
                }
                if(accumulator.weather[0].icon[accumulator.weather[0].icon.length-1] === 'n' && currentValue.weather[0].icon[currentValue.weather[0].icon.length-1] === 'd'){
                    copy.weather[0].icon = currentValue.weather[0].icon;
                }
                return copy;
            },daysList[prop][0]);
        }
        Object.keys(medium).forEach((key,index)=>{
            if(index<period){
                final[key] = medium[key];
            }
        });
        return final;
  }
}
