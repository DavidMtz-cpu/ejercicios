(()=> {
    function calcular(sueldoMin:number,diasLaborales:number,hrsTrabajadas:number){
        let resultado: number;
        const resultadoEntre = resultado = sueldoMin / diasLaborales
        const resultado3 = resultadoEntre / hrsTrabajadas;
        return resultado3;
    }
    console.log( calcular(1313,7,8) );
})(); 