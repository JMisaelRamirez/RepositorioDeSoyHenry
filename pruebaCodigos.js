let numerosDesordenados = [5,4,3,2,1,0,-3,-4]

function ordenarNumeros (numeros) {

  for (let i = 0; i < numeros.length; i++) { // i = 0
    let numeroMin = numeros[i]; // 10
    let posicionNumeroMinimo;
        // j =  4   4 < 4           
    for (j = i + 1; j < numeros.length; j++) { 
      if (numeros[j] < numeroMin) { // 7 < 8
        numeroMin = numeros[j]; // 
        numeros[j] = numeros[i]
        numeros[i] = numeroMin;
      }

    }


  }
  return numeros
}

let numerosOrdenados = ordenarNumeros(numerosDesordenados);
console.log(numerosOrdenados)