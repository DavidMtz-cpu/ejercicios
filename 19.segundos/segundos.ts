(()=>{
    function calcular(segundos:number){
        let resultado;
        resultado = segundos*60;
        return resultado;
    }

    console.log('minutos a segundos',calcular(60));
})()