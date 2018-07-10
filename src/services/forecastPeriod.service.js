export const forecastPeriodService =  {
    getForecastPeriod,
    setForecastPeriod,
    getForecastByLatLng
};

function getForecastPeriod(){
    try{
        const period = localStorage.getItem('forecastPeriod');
        if(period === null){
            return;
        }return period;

    }catch(e){
        console.log(e);

    }
}

function setForecastPeriod(number){
    try{
        localStorage.setItem('forecastPeriod',number);
        return number;
    }catch(e){
        console.log(e);
    }
}

async function getForecastByLatLng(latitude,longitude){
    const key = '6866075b0c665a854c8731d19df394eb';
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${key}`;
    try{
        const result = await fetch(url,{
            method: 'get'
        });
        const json = await result.json();
        return json;
    }catch(e){
        return {error: e};
    }
}