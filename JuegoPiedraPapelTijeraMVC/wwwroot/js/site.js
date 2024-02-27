let victoriasJug1 = 0;
let victoriasJug2 = 0;

//1 PIEDRA, 2 PAPEL, 3 TIJERA
let seleccionJug1 = 0;
let seleccionJug2 = 0;

function iniciarJuego() {
    $("#contenido").load("/Pantallas/Juego");
}

function eleccionJugador1(seleccion,boton) {

    seleccionJug1 = seleccion;
    desactivarBotonesJug1(boton);

    if (seleccionJug1 !== 0 && seleccionJug2 !== 0) {
        comprobarSelecciones();
    }
};

function desactivarBotonesJug1(boton) {

    $('#panelJug1 button').prop('disabled', true);
    $('#panelJug1 button').css({
        'background-color': 'gray',
        'color': 'white'
    });

    $(boton).css({
        'background-color': 'green',
        'color': 'white'
    });
}

function eleccionJugador2(seleccion) {

    seleccionJug2 = seleccion;
    desactivarBotonesJug2();

    if (seleccionJug1 !== 0 && seleccionJug2 !== 0) {
        comprobarSelecciones();
    }

    seleccionJug1 = 0;
    seleccionJug2 = 0;
};

function desactivarBotonesJug2() {

    $('#panelJug1 button').prop('disabled', true);
    $('#panelJug1 button').css({
        'background-color': 'gray',
        'color': 'white'
    });

    $(this).css({
        'background-color': 'green',
        'color': 'white'
    });
}

function comprobarSelecciones() {

    if ((seleccionJug1 === 1 && seleccionJug2 === 3) ||
        (seleccionJug1 === 2 && seleccionJug2 === 1) ||
        (seleccionJug1 === 3 && seleccionJug2 === 2))
    {
        victoriasJug1++;
        $("#panelJug1 p").text(victoriasJug1);
    }
    else if ((seleccionJug2 === 1 && seleccionJug1 === 3) ||
        (seleccionJug2 === 2 && seleccionJug1 === 1) ||
        (seleccionJug2 === 3 && seleccionJug1 === 2))
    {
        victoriasJug2++;
        $("#panelJug2 p").text(victoriasJug2)
    }

    $('#panelJug1 button').prop('disabled', false);
    $('#panelJug2 button').prop('disabled', false);

    $('#panelJug1 button, #panelJug2 button').css({
        'background-color': 'red',
        'color': 'white'
    });

    if (victoriasJug1 === 3) {
        mostrarGanador("Jugador1");
    } else if (victoriasJug2 === 3) {
        mostrarGanador("Jugador2");
    }
}

function reiniciarPartida() {
    victoriasJug1 = 0;
    victoriasJug2 = 0;
    seleccionJug1 = 0;
    seleccionJug2 = 0;
    $("#contenido").load("/Pantallas/Juego");
}

function mostrarGanador(ganador) {
    $("#contenido").load("/Pantallas/Ganador?ganador=" + ganador);
}