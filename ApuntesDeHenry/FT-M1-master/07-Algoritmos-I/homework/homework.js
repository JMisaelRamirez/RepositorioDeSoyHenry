'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  //  180  | 2
  //  90   | 2
  //  45   | 3
  //  15   | 3
  //  5    | 3
  //  1    | 5
  
  let primos = [1];
  let valorDenominador = 2;
  let posicion = 1;

  while(num !== 1){
    if(num % valorDenominador === 0){
      num = num / valorDenominador;
      primos[posicion] = valorDenominador
      posicion ++
    }else{
      valorDenominador++
    }
  }
  return primos
}

//  180  | 2
//  90   | 2
//  45   | 3
//  15   | 3
//  5    | 3
//  1    | 5


function bubbleSort(numeros){
    let cambio = true;
    while(cambio){
        cambio = false;
        for(let i = 0; i < numeros.length-1; i++){
            if(numeros[i] > numeros[i +1]){
                cambio = true;
                let auxiliar = numeros[i];
                numeros[i] = numeros[i+1];
                numeros[i+1] = auxiliar
            }
        }
    }
    return numeros
}


function insertionSort (numeros) {
  for (let i = 1; i <= numeros.length - 1; i++ ){
    let numeroAComparar = numeros[i]
        //  0 1 2 3
    // [3,2,4,5] 2, if numeroAComparar < numeros[i-j] 
    // i = 1 y j = 1         2              4                      
            
    //                                         
    //         numero[i]
    //                                   
    //         if (numeroAComparar < numeros[i - j])
    //             switch
    // num 
    for(let j = 1; (i-j) >= 0  && numeroAComparar < numeros[i - j]; j++){
      numeros[i - j + 1] = numeros[i - j];
      numeros[i - j] = numeroAComparar; 
    }
  }
  return numeros;
}

  function selectionSort (numeros) {

    for (let i = 0; i < numeros.length; i++) { // i = 0
      let numeroMin = numeros[i]; // 10
      let posicionNumeroMinimo;
          // j =  4   4 < 4           
      for (let j = i + 1; j < numeros.length; j++) { 
        if (numeros[j] < numeroMin) { // 7 < 8
          numeroMin = numeros[j]; // 
          numeros[j] = numeros[i]
          numeros[i] = numeroMin;
        }
  
      }
  
  
    }
    return numeros
  }


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
