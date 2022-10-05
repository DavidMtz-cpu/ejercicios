"use strict";
(function () {
    function calcular(minutos) {
        if (minutos <= 60) {
            alert("Debe un total de 10 pesos,su tiempo es de " + minutos + " minutos :)");
        }
        if (minutos > 60) {
            alert("Debe un total de 20 pesos,su tiempo es de " + minutos + " minutos :)");
        }
    }
    calcular(120);
})();
