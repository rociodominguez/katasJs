// Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.
//  Implementa la función denominada sumAll que toma un array de números como argumento y devuelve la suma de todos los números de la matriz.
// Puedes usar este array para probar tu función:
const numbers = [1, 2, 3, 5, 45, 37, 58];

const sumAll = (param) => param.reduce((sum, num) => sum + num, 0);

const result = sumAll(numbers);
console.log(result);
