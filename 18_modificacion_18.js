let avance = 95;
let conectividad = 150;
let promedio = 4.5;

//Reglas
let reglaAvance = avance >= 90;
let reglaConectividad = conectividad >= 135;
let reglaPromedio = promedio >= 4.0;

if (reglaAvance && reglaConectividad && reglaPromedio) {
    console.log("Has aprobado el curso. ¡Felicitaciones!");
} else {
    
    let mensaje = "No cumples con los requisitos para aprobar el curso, conforme al siguiente detalle.\n";

    if(!reglaAvance){
        mensaje +="- No cumple con el creterio de avance [Mayor o igual 90%]\n";
    }
    if(!reglaConectividad){
        mensaje +="- No cumple con el creterio de conectividad [Mayor a 135 horas.]\n";
    }

    if(!reglaPromedio){
        mensaje +="- No cumple con el promedio mínimo aceptado [mayor a 4.0]\n";
    }

    console.log(mensaje);
}
