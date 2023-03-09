"use strict";

function BinarioADecimal(num) {
  // Codigo de Misael:
  /*  
  let array = [];
  let numDecimal = 0;
  
  for(let i = 0;i < num.length; i++){
    array.unshift(num[i]);
  }

  for(i = 0; i < array.length; i++){
    numDecimal = numDecimal + Math.pow(2,i) * array[i];
  }

  return numDecimal;
  */
  
  // Codigo de Henry
  
  // Codigo HENRY 
  // '1010' -> ['1','0','1','0']
  // Posiciones: 0   1   2   3   Lo que tenemos
  //             3   2   1   0   A lo qu queremos llegar
  var array = num.split(''); //['1','0','1','0']
  var sum = 0;

  for(var i = 0; i < num.length; i++){
    sum = sum + Math.pow(2,array.length-1-i)*array[i];
  }

  return sum;

}

function DecimalABinario(num) {
  // Pasar de Decimal a Binario 
  // Se logra dividiendo cada numero entre 2 y colocar 1 si 
  // tiene residuo y 0 si no tiene
  // El numero es un string
  //let bin = parseInt(num);

// CODIGO MISAEL
/* 
function DecimalABinario(num) {
  let almacenador = []
  while (num!==0){
      let residuo = parseInt(num%2);
      num = Math.floor(num/2);
      almacenador.unshift(residuo);
      console.log(`El Div es: ${num} y el Residuo:${residuo}`);
  }
  return almacenador;
}*/

// CODIGO DE HENRY: 

// num  =  10
// 10/2 = 5  [0] ^
// 5/2 =  2  [1] |
// 2/2 =  1  [0] |
// 1/2 =  0  [1] | -> [1,0,1,0]
  var array = [];
  // Condiciones iniciales.
  if(num === 0) return '00000000';
  if(num < 0) return false;

  while (num > 0){
    array.unshift(num % 2); //-> [1,0,1,0]
    num = Math.floor(num / 2);  // Num tipo Int
  }

  return array.join(""); 


}



module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
