"use strict";
(function () {
    function calcular(gradosCelcius) {
        var resultado;
        var resultadoFinal = resultado = gradosCelcius * 1.8;
        return resultadoFinal + 32;
    }
    console.log(calcular(30));
})();
