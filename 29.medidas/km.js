"use strict";
(function () {
    var nombre, nombre2, n1, n2, n3, resultado;
    nombre = prompt('ingrese su nombre');
    alert("Hola " + nombre);
    n1 = prompt('Parte parcial = 10%');
    n2 = prompt('Parte de problemas = 50%');
    n3 = prompt('Parte teorica = 40%');
    var resultadofinal = resultado = (parseInt(n1) + parseInt(n2) + parseInt(n3));
    alert("el resultado es" + resultadofinal / 3);
})();
