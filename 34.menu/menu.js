"use strict";
(function () {
    function calcular() {
        var opcion = alert('Ingrese una opcion');
        var pedirDatos = parseInt(prompt('1.)Sumar, 2.)Restar, 3.)Resultado, 4.)Salir'));
        var acumulador = 25;
        if (pedirDatos === 1) {
            var resultado = void 0;
            var sumar = parseInt(prompt('Ingrese un numero'));
            alert(resultado = sumar + acumulador);
        }
        ;
        if (pedirDatos === 2) {
            var resultado2 = void 0;
            var restar = parseInt(prompt('Ingrese un numero'));
            alert(resultado2 = restar - acumulador);
        }
        ;
        if (pedirDatos === 3) {
            alert("El acumulador es igual a " + acumulador);
        }
        ;
        if (pedirDatos === 4) {
            alert('Saliendo');
        }
        ;
        return pedirDatos;
    }
    calcular();
})();
