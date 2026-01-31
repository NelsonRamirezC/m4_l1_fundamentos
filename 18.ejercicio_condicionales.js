/*
    PARA APROBAR EL CURSO DEBEN CUMPLIR LOS SIGUIENTES REQUISITOS.

    - PORCENTAJE DE AVANCE PLATAFORMA: MAYOR O IGUAL AL 90%
    - HORAS DE CONECTIVIDAD: MAYOR Y IGUAL A 135
    - PROMEDIO FINAL DEL CURSO: MAYOR O IGUAL QUE 4.0
*/

let avance = 90;
let conectividad = 135;
let promedio = 3.9;

//Reglas
let reglaAvance = avance >= 90;
let reglaConectividad = conectividad >= 135;
let reglaPromedio = promedio >= 4.0;

if (reglaAvance && reglaConectividad && reglaPromedio) {
    console.log("Has aprobado el curso. ¡Felicitaciones!");
} else {
    console.log("No cumples con los requisitos para aprobar el curso.");
}
