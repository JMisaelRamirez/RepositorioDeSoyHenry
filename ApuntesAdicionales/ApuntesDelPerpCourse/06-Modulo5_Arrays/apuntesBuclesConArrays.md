# **MODULO 5**
># **Bucles con arrays**

* Un bucle es una secuencia de instrucciones a la que se le asigna un valor. 
* Se ejecuta hasta que la condicion asignada deje de cumplirse.

Algunos ejemplos de los bulces aplicados a los arrays, son los siguientes: 


**Ejem1 (for):**
```javascript
// IMPRIME CADA ELEMENTO DE UN ARRAY
let array = [1,2,3,4,5,6];
for(let i = 0; i < array.length; i++){
    console.log(array[i]);
}
```

**Ejem2 (for):**

```javascript
//INDICA SI EL ARRAY CONTIENE UNA LETRA P
var array = [];
function tieneLaP(palabra){
    var array = palabra.split('');
    for(let i = 0; i < array.length; i++){
        if(array[i] === 'p' || array[i] === 'P'){
            console.log('Tiene la letra P')
        }
    }
}
tieneLaP('misaelp');
tieneLaP('putito');
```

**Ejem3 (while):**

```javascript
let array = [];
while (array.length == 4){
    array.push('BOOM');
}
console.log(array);
```