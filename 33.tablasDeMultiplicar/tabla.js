"use strict";
(function () {
    function calcular(numero) {
        for (var index = 1; index <= 15; index++) {
            console.log(numero + " x " + index + " = " + index * numero);
        }
    }
    console.log(calcular(5));
})();
