"use strict";
(function () {
    function calcular(colones, años) {
        var resultado;
        resultado = colones * 2.32;
        return resultado * años;
    }
    console.log('el interes que se genero', calcular(1500, 5));
})();
