(() =>{

    function calcular(numero:number){
        for (let index = 1; index <= 15; index++) {
            console.log(`${numero} x ${index} = ${index*numero}`); 
        }
    }
    console.log(calcular(5));

})()