( () =>{
    const n1:string | undefined | number= parseInt( prompt("Introduce un numero")!);
    const n2:string | undefined | number = parseInt( prompt("Introduce un numero")!);
    const respuesta = n1! + n2!;
    alert(respuesta)

})()