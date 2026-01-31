/*
Estar sin trabajo al momento de la postulación, ya sea como trabajador dependiente o independiente.

Ser mayor de 18 años.

Haber finalizado la Enseñanza Media.

Tener al menos 3 cotizaciones previsionales en los últimos 36 meses.

No haber tenido un ingreso bruto promedio superior a $1.200.000 en los últimos 12 meses

*/

let cesantia = true;
let edad = 20;
let educacionMedia = true;
let cotizaciones = true;
let ingresoPromedio = 500_000;

//CREAR REGLAS 
let reglaCesantia = cesantia == true;
let reglaEdad = edad >= 18;
let reglaEducacionMedia = educacionMedia == true;
let reglaCotizaciones = cotizaciones == true;
let reglaIngreso = ingresoPromedio <= 1_200_000;

if(reglaCesantia && reglaEdad && reglaEducacionMedia && reglaCotizaciones && reglaIngreso){
    console.log("Usted cumple con los requisitos para la beca.");
}else{
    console.log("Usted no cumple con los requisitos de aprobación");
}

