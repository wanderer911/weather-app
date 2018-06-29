export const scaleService = {
    getScale,
    setScale
};

function getScale(){
    try{
        const scale = localStorage.getItem('scale');
        if(scale === null){
            return;
        }return scale;

    }catch(e){
        console.log(e);

    }
}

function setScale(scale){
    try{
        localStorage.setItem('scale',scale);
        return scale;
    }catch(e){
        console.log(e);
    }
}