// Destructuring en arrays

let series = [1, 2, 3, 4, 5, 6, 7];
console.log(`
###################################################
Destructuración de arrays
###################################################
`);
let [uno, dos, tres] = series;
console.log(uno); // 1
console.log(dos); // 2
console.log(tres); // 3, el resto es ignorado


console.log("Destructuración sin ocupar todas las variables, y el capturando el sobrante: ");
let [,,,cuatro] = series, [,,,,...resto] = series;
// [...resto, cualquier_otra_cosa] = series; // error de sintaxis
console.log(cuatro); // 4
console.log(resto); // [5, 6, 7]

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];


console.log("Destructuración anidada y defaults: ");
let [ [uno_uno], [dos_uno], [tres_uno], cuatro_uno = "10"  ] = matrix;
console.log(uno_uno); // 1
console.log(dos_uno); // 4
console.log(tres_uno); // 7
console.log(cuatro_uno); // 10
