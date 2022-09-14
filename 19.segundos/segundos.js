"use strict";
(function () {
    function calcular(segundos) {
        var resultado;
        resultado = segundos * 60;
        return resultado;
    }
    console.log('minutos a segundos', calcular(60));
})();
