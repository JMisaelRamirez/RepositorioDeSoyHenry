"use strict";

function BinarioADecimal(num) {
  // tu codigo aca:

  // Codigo de Misael
  // 10011010 -> Decimal
  let array = [];
  let numDecimal = 0;
  
  for(let i = 0;i < num.length; i++){
    array.unshift(num[i]);
  }

  for(i = 0; i < array.length; i++){
    numDecimal = numDecimal + Math.pow(2,i) * array[i];
  }

  return numDecimal;
  

}


function DecimalABinario(num) {
  // tu codigo aca:

  // Codigo de Misael:

  
  let array = []
  let str = ""
  for (let i = 0; i < 9999; i++){
    if (num < 1){
      break;
    }
    let a = num % 2;
    array.unshift(a);
    num = Math.floor(num / 2)
 
}
  for (let i = 0; i < array.length; i++){
    str = str + array[i]
}
return str
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
