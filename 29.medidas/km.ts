(()=>{
    let nombre:string | null | number,
    nombre2   :string | null | number,
    n1        :string | null | number,
    n2        :string | null | number,
    n3        :string | null | number,
    resultado :string | null | number;

    nombre = prompt('ingrese su nombre')
    alert(`Hola ${nombre!}`)
    n1 = prompt('Parte parcial = 10%');
    n2 = prompt('Parte de problemas = 50%');
    n3 = prompt('Parte teorica = 40%')

    let resultadofinal = resultado = (parseInt(n1!)+parseInt(n2!)+parseInt(n3!));
    alert("el resultado es" + resultadofinal/3)
})()