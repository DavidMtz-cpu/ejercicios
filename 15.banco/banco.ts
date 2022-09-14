(() =>{
    function calcular(colones:number,años:number){
        let resultado;
        resultado = colones * 2.32;
        return resultado * años;
    }

    console.log('el interes que se genero',calcular(1500,5));
})()