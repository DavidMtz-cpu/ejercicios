(()=>{
    function calcular(){
        let opcion    :number = alert('Ingrese una opcion')!;
        let pedirDatos:number = parseInt( prompt( '1.)Sumar, 2.)Restar, 3.)Resultado, 4.)Salir')!);
        let acumulador:number = 25;
        if( pedirDatos === 1){
            let resultado;
            let sumar:number = parseInt(prompt('Ingrese un numero')!);
            alert( resultado = sumar + acumulador  )!;
        };
        if( pedirDatos === 2){
            let resultado2;
            let restar:number = parseInt(prompt('Ingrese un numero')!);
            alert( resultado2 = restar - acumulador)!;
        };
        if( pedirDatos === 3 ){alert(`El acumulador es igual a ${acumulador}`)};
        if( pedirDatos === 4){
            alert('Saliendo') 
        };
        return pedirDatos;
    }
    calcular()

})()