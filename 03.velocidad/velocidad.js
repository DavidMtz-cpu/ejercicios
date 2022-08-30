"use strict";
(() => {
    function calcular(metrosTotales, minutos, segundos, mtsXSegundo) {
        let resultado;
        resultado = metrosTotales / minutos / segundos;
        return resultado;
    }
    console.log('Metros corridos por segundo', calcular(1500, 7, 30));
})();
