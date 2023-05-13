// index.js
let a = require('./pruebaCodigos');
// con la funcion require('') solicitamos los elementos disponibles
// del archivo pruebaCodido.js. El valor es un objeto, por lo tanto ->
// a {
//      alumnoAux: alumno, 
//      name: function, 
//      number: function,
//      cantidadDeAlumnos: names.length + 1
//   }

console.log(a.alumnoAux) // >> 'Toni'
console.log(a.name) // >> function: name
console.log(a.name(1)) // >> 'Misael'
console.log(a.number('Jenn')) // 0