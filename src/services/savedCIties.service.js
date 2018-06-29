export const citiesService =  {
    getCities,
    setCities
};

function getCities(){
    try{
        const cities = localStorage.getItem('cities');
        if(cities === null){
            return;
        }
        return JSON.parse(cities);

    }catch(e){
        console.log(e);

    }
}

function setCities(cities){
    try{
        const string = JSON.stringify(cities)
        localStorage.setItem('cities',string);
        return string;
    }catch(e){
        console.log(e);
    }
}