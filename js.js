export let nums = [1, 2, 3, 4, 5]
export let num1 = 3.4; 
export let saludo = 'Hola';

export let sumar = (x, y) => {
  return x + y;
}

export function saludar() {
  console.log("Hola mundo");
}

//  PARA UTILIZAR ESTE DEFAULT ES NECESARIO IMPORTARLO DE LA MANERA QUE SE MENCIONA EN EL index.js
export default function resta(x, y) {
  return x - y;
}