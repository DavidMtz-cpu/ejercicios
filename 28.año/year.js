"use strict";
(function () {
    function calcular(year) {
        if (year > 365 / 4 || year / 100 / 400) {
            console.log('es años bisiesto');
            console.log(year / 4, year / 100 / 400);
        }
        else {
            console.log('no es año bisiesto');
            console.log(year / 4, year / 100 / 400);
        }
    }
    console.log(calcular(365));
})();
