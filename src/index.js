// Actividad 01

// const IVA = 1.21;
// let importe = parseFloat(prompt("Ingresa el importe sobre el cual quieres calcular el IVA:"))

// let resultado = precioConIVA(importe, IVA)

// function precioConIVA(valor, valorIva) {
//     if(isNaN(valor)){
//         return
//     }else{
//         return valor * valorIva
//     }
// }

// console.log(precioConIVA(500, IVA))

// console.log(resultado)

//Actividad 02

let VALOR_M2 = 31.83; //valor fijo del seguro por Metro 2
const COMISION = 1.025; //comisión del 2.5%

function calcularPoliza(cantMetros, valorMetro, comision) {
    return cantMetros * valorMetro * comision;
}

const M2 = prompt("Ingresa los Metros cuadrados de la propiedad a cotizar un seguro:");
const valorPoliza = calcularPoliza(M2, VALOR_M2, COMISION);
console.log("El costo de la póliza es: $", valorPoliza);
const valorComsion = calcularPoliza(10, 1000, 1.15);
const valorPolizaSegunUsuario = calcularPoliza(M2, prompt("valor del metro"), COMISION);