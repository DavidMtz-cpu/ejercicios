"use strict";
(function () {
    function calcular(tasaDeInTeres, plazoAnual, plazoMensual) {
        var resultado;
        var resultadofinal = resultado = tasaDeInTeres * plazoAnual;
        return resultadofinal / plazoMensual;
    }
    console.log(calcular(91000, 30, 360));
})();
