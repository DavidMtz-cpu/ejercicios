"use strict";
(function () {
    function calcular(metrosXSegundos, segundos) {
        var resultado;
        resultado = segundos / metrosXSegundos;
        return resultado;
    }
    console.log('Metros recorridos x segundo', calcular(300, 400));
})();
