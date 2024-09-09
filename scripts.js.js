const prompt = require('prompt-sync')();


let primerNumero = prompt("Ingrese el primer número: ");
let segundoNumero = prompt("Ingrese el segundo número: ");
let tercerNumero = prompt("Ingrese el tercer número: ");

// Convertir las entradas a números
primerNumero = Number(primerNumero);
segundoNumero = Number(segundoNumero);
tercerNumero = Number(tercerNumero);


if (isNaN(primerNumero) || isNaN(segundoNumero) || isNaN(tercerNumero)) {
    console.log("Error: Ingresaste valores no válidos en el programa.");
} else {
    let numeros = [primerNumero, segundoNumero, tercerNumero];

    // Ordenar los números de mayor a menor
    let ordenDescendente = numeros.slice().sort((a, b) => b - a);

    // Ordenar los números de menor a mayor
    let ordenAscendente = numeros.slice().sort((a, b) => a - b);

    console.log("Ordenados de mayor a menor:", ordenDescendente);
    console.log("Ordenados de menor a mayor:", ordenAscendente);

    let numeroDelCentro = ordenAscendente[1]; // En un array de 3 números ordenados, el número del centro es el segundo elemento

    console.log("El número del centro es:", numeroDelCentro);

    // Verificar si todos los números son iguales
    if (primerNumero === segundoNumero && segundoNumero === tercerNumero) {
        console.log("Todos los números son iguales.");
    }
}

