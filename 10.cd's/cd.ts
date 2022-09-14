(() =>{
    function calcular(cdLleno:number,cdVirgen:number=700){
        let resultado;
        const resultadoTotal = resultado = cdLleno*1024;
        return resultadoTotal/cdVirgen;
    }
    console.log('Discos que se necesita para hacer la copia de seguridad', calcular(480));
})()