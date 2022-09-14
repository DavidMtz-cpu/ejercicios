(() =>{
    function calcular(edad:number){
        let resultado;
        let resultadoPorAño = resultado = edad * 365;
        let resultadoPorHrs = resultadoPorAño * 24;
        let resultadoPorMIn = resultadoPorHrs * 60; 

        return resultadoPorMIn *3600;
    }

    console.log(calcular(18));
})()