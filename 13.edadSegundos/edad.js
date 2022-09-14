"use strict";
(function () {
    function calcular(edad) {
        var resultado;
        var resultadoPorAño = resultado = edad * 365;
        var resultadoPorHrs = resultadoPorAño * 24;
        var resultadoPorMIn = resultadoPorHrs * 60;
        return resultadoPorMIn * 3600;
    }
    console.log(calcular(18));
})();
