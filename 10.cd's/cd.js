"use strict";
(function () {
    function calcular(cdLleno, cdVirgen) {
        if (cdVirgen === void 0) { cdVirgen = 700; }
        var resultado;
        var resultadoTotal = resultado = cdLleno * 1024;
        return resultadoTotal / cdVirgen;
    }
    console.log('Discos que se necesita para hacer la copia de seguridad', calcular(480));
})();
