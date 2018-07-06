export const citiesService =  {
    getCities,
    getCity,
    addCity,
    removeCity
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

function getCity(place_id){
    try{
        const citiesString = localStorage.getItem('cities');
        const cities = JSON.parse(citiesString) || [];
        return cities.find(el=>el.place_id === place_id);  //undefined or object
    }catch(e){
        console.log(e);
    }
}

function removeCity(city){
    try{
        const citiesString = localStorage.getItem('cities');
        const cities = JSON.parse(citiesString) || [];
        const newCities = cities.filter(item=>item.place_id !== city.place_id);
        localStorage.setItem('cities',JSON.stringify(newCities));
        return city;
    }catch(e){
        console.log(e);
    }

}
function addCity(city){
    try{
        const citiesString = localStorage.getItem('cities');
        const cities = JSON.parse(citiesString) || [];
        cities.push(city);
        localStorage.setItem('cities',JSON.stringify(cities));
        console.log('added');
        return city;
        
    }catch(e){
        console.log(e);
    }
}