export const forecastPeriodService =  {
    getForecastPeriod,
    setForecastPeriod
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