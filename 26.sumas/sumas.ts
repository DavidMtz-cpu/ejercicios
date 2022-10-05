(()=>{
    function calcular(numero:number){
        for (let i = numero; i <= 50; i++) {
            if (i % 2 == 0) {
              console.log(i);
            }
        }
    }
    console.log(calcular(11));
})()