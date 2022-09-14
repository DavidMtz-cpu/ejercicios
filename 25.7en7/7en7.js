"use strict";
(function () {
    function calcular() {
        var n1, n2, resultado;
        n1 = prompt('Primer numero');
        n2 = prompt('Segundo numnero');
        if (n1 < n2 && n2 > n1) {
            console.log('n1 es menor que 2');
        }
        else {
            console.log('n1 es mayor que 2');
        }
        resultado = (parseInt(n1) + parseInt(n2));
        alert("el resultado es" + resultado);
    }
    calcular();
})();
