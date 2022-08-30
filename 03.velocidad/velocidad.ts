(()=> {
    function calcular(metrosTotales:number,minutos:number,segundos:number,mtsXSegundo?:number){
        let resultado;
        resultado = metrosTotales / minutos / segundos;
        return resultado
    }
    console.log( 'Metros corridos por segundo',calcular(1500,7,30) );
})()