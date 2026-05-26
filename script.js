//EJERCICIO A - En este ejercicio me ayude con la IA para hacer el Semaforo 
//Luego a lo aprendido lo aplique en los demas ejercicios

const form = document.getElementById("formSemaforo");

form.addEventListener("submit", function (evento) {

    evento.preventDefault();

    const color = document
        .getElementById("colorInput")
        .value
        .toLowerCase(); //Pasar todo a minuscula

    const mensaje = document.getElementById("mensaje");

    // APAGAR TODAS LAS LUCES

    document
        .querySelectorAll(".luz")
        .forEach(luz => {
            //ELIMINA LA CLASE -ACTIVO- CON OPACIDAD, POR LO TANTO LO HACE MAS TRANSPARENTE Y APAGA LA LUZ
            luz.classList.remove("activo");
        });

    // SWITCH CASE

    switch (color) {

        case "rojo":

            document
                .getElementById("rojo")
                .classList.add("activo");

            mensaje.textContent = "FRENA";

            break;

        case "amarillo":

            document
                .getElementById("amarillo")
                .classList.add("activo");

            mensaje.textContent = "PRECAUCIÓN";

            break;

        case "verde":

            document
                .getElementById("verde")
                .classList.add("activo");

            mensaje.textContent = "AVANZA";

            break;

        default:

            mensaje.textContent = "SEMÁFORO APAGADO";
    }
});

//EJERCICIO B

const formB = document.getElementById("formCalculadora");

formB.addEventListener("submit", function (evento) {

    evento.preventDefault();

    const cantidadProductos = document
        .getElementById("cantidadProductos")
        .value;

    const cliente = document
        .getElementById("cliente")
        .value;

    const esCliente = (cliente === 'true');

    const mensajeB = document.getElementById("mensajeB");

    const precioProducto = 1000;

    let total = precioProducto * cantidadProductos;

    // APLICAMOS DESCUENTO DEL 10% SI ES CLIENTE
    // Y SI ADEMAS LA CANTIDAD DE PRODUCTOS ES IGUAL O MAYOR A 3, SE AGREGA 10% MAS

    let descuento = 1;

    if (esCliente) {
        descuento = (cantidadProductos >= 3) ? 0.8 : 0.9;
    }

    total *= descuento;

    mensajeB.textContent = ` ${total} `;

});

//EJERCICIO C

const formC = document.getElementById("formTemperatura");

formC.addEventListener("submit", function (evento) {

    evento.preventDefault();

    const temperatura = document
        .getElementById("temperatura")
        .value;

    const mensajeC = document.getElementById("mensajeC");

    let tiempoHoy = "";

    if (temperatura<10){
        tiempoHoy = "Frio";
    } else if (temperatura<20){
        tiempoHoy = "Fresco";        
    } else if (temperatura<30){
        tiempoHoy = "Agradable";        
    } else {
        tiempoHoy = "Caluroso";
    }

    mensajeC.textContent = ` ${tiempoHoy} `;

});

//EJERCICIO D

const formD = document.getElementById("formValor");

formD.addEventListener("submit", function (evento) {

    evento.preventDefault();

    const nombre = document
    .getElementById("nombre")
    .value;

    //SI EL VALOR DE LA VARIABLE NOMBRE ES "NULL", GUARDAMOS EL VALOR NULL, SINO EL NOMBRE

    const esNull = (nombre==="null") ? null : nombre;

    const mensajeD = document.getElementById("mensajeD");

    mensajeD.textContent = esNull ?? "Invitado";

});

//EJERCICIO E

const formE = document.getElementById("formValida");

formE.addEventListener("submit", function (evento) {

    evento.preventDefault();

    const usuario = document
    .getElementById("usuario")
    .value;

    const edad = document
    .getElementById("edad")
    .value;

    const mensajeE = document.getElementById("mensajeE");

    mensajeE.textContent = ((usuario != "") && (edad >= 18)) ? "BIENVENIDO" : "ERROR";
    
});

//EJERCICIO F

const formF = document.getElementById("formAdivina");

formF.addEventListener("submit", function (evento) {

    evento.preventDefault();    

    const num = document
    .getElementById("number")
    .value;

    const mensajeF = document.getElementById("mensajeF");

    mensajeF.textContent =  (num > 42) ? "Muy alto" : ( num < 42 ? "Muy bajo" : "ADIVINASTE");
    
});