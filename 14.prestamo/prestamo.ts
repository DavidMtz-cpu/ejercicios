(()=>{
    function calcular(tasaDeInTeres:number,plazoAnual:number,plazoMensual:number){
        let resultado; 
        const resultadofinal = resultado = tasaDeInTeres * plazoAnual 
        return resultadofinal / plazoMensual;
    }
    console.log(calcular(91000,30,360));
})()