(()=>{


        let n1:string | null | number ,n2:string | null | number ,resultado:string | null | number ;
        n1 = prompt('Primer numero');
        n2 = prompt('Segundo numero');
        if( n1! < n2! && n2! > n1! ){
            console.log('n1 es menor que 2');
        }else{
            console.log('n2 es mayor que 1');
        }
    
        resultado = (parseInt(n1!)+ parseInt(n2!));
        alert("el resultado es" + resultado)

})()