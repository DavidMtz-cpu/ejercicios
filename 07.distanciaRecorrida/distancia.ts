( () => {
    function calcular( metrosXSegundos:number,segundos:number ){
        let resultado;
        resultado = segundos / metrosXSegundos
        return resultado
    }
    console.log( 'Metros recorridos x segundo',calcular( 300, 400 ) );
})()