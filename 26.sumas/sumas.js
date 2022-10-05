"use strict";
(function () {
    function calcular(numero) {
        for (var i = numero; i <= 50; i++) {
            if (i % 2 == 0) {
                console.log(i);
            }
        }
    }
    console.log(calcular(11));
})();
