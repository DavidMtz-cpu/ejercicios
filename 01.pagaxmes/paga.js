"use strict";
(function () {
    function calcular(sueldoMin, diasLaborales, hrsTrabajadas) {
        var resultado;
        var resultadoEntre = resultado = sueldoMin / diasLaborales;
        var resultado3 = resultadoEntre / hrsTrabajadas;
        return resultado3;
    }
    console.log(calcular(5225, 7, 8));
})();
