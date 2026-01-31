/*

una aporte de chatgpt: Se aprueba el crédito SOLO si se cumple todo lo siguiente:
- La persona es mayor o igual a 21 años
- Tiene un ingreso mensual de al menos 600.000
- NO está en Dicom

Cumple una de estas dos: (OPCIONALES)
Tiene contrato indefinido
O tiene contrato a plazo pero con antigüedad ≥ 24 meses
Si falla cualquiera de las condiciones → crédito rechazado.
*/

let edad = 25;
let ingreso = 700_000;
let dicom = false;
let contratoIndefinido = true;
let antiguedad = 25; 

//REGLAS

//OBLIGATORIOS
let reglaEdad = edad >= 21;
let reglaIngreso = ingreso >=600_000;
let reglaDicom = dicom == false;

//OPCIONALES -> AL MENOS UNO
let reglaContratoIndefinido = contratoIndefinido == true;
let reglaAntiguedad = antiguedad >= 24;

if((reglaEdad && reglaIngreso && reglaDicom) && (reglaContratoIndefinido || reglaAntiguedad)){
    console.log("Crédito aprobado.");
}else {
    console.log("crédito rechazado");
}


