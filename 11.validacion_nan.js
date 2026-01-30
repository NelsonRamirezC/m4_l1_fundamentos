let numero = "10";

numero = Number(numero);

console.log(numero); // NaN
console.log("Tipo de dato: ", typeof(numero));

if(isNaN(numero)){
    console.log("El valor ingresado no es un número.");
}else {
    console.log(numero*10);
}