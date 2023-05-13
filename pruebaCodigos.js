// nombres.js
let names = ['Jenn','Misael','Julio'];
let alumno = 'Toni';
let alumna = 'Mati';
let amountOfStudents = names.length + 1; 

exports.alumnoAux = alumno;
exports.name = function name (number) {return names[number];};
exports.number = function number (name) {return names.indexOf(name);};
exports.cantidadDeAlumnos = amountOfStudents;

// Exports es un objeto.
// exports {
//          alumnoAux: alumno, 
//          name: function, 
//          number: function,
//          cantidadDeAlumnos: names.length + 1
//         }
 