export * from './history';
export * from './store';


export function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    return time;
  }

export function convertMinMax(list,period){
  const daysList = {};
  const medium = {};
  const final = {}
  if(list && list.length){
      list.forEach((item,index)=>{
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
              if(accumulator.weather[0].icon[accumulator.weather[0].icon.length-1]=== 'n' && currentValue.weather[0].icon[currentValue.weather[0].icon.length-1] ==='d'){
                copy.weather[0].icon = currentValue.weather[0].icon;
              }
              return copy;
          },daysList[prop][0]);
      }
  }
  Object.keys(medium).forEach((key,index)=>{
    if(index<period){
      final[key] = medium[key];
    }
  })
  return final;
}
