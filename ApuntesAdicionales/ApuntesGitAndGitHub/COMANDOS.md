# **COMANDOS GIT AND GITHUB**
[3, 34, 5, ]



# **POWER SHELL**
> **ni ""**
Permite crear un nuevo archivo.

# **COMANDOS DE JS**
>**return**

El return, dentro de una funcion, nos permite retornar un valor para que este sea utilizado en la asigancion del dato de una variable. Esto no quiere decir que cambiara el valor de la variable. 

>**let**

El comando let, nos permite definir una variable de forma "temporal", para comprender mas esta situacion empezaremos explicando el siguiente caso:

```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor);

output: 'Tony'
        'Franco'
```
Al cambiar _var_ por _let_ en la variable _instructor = 'Franco'_ el output cambiara:

```javascript
var instructor = "Tony";
if(true) {
    let instructor = "Franco";
}
console.log(instructor);

output: 'Tony'
        'Tony'
```
Esto es debido a que _let_ nace y muere entre llaves _({})_.

### Diferencia entre let y var
Cuando se ejecuta el programa y se crea el contexto global, las variables definidas con _let_ no se guardan como un metodo(propiedad) en el objeto this y, por otro lado, cuando se utiliza _var_ siempre se mantendra en memoria este registro de la variable.

> **IMMEDIATE FUNCTIONS**

Las funciones inmediatas se ejecutan luego luego, ademas de que tambien pueden ser llamadas despues. Se escriben entre parentesis (function _funcion_(){})();

> **parseInt()**

Es muy similar al comando _number()_, solo que, _parseInt()_ convierte un string a un numero completamente entero. Si se ha de convertir un numero flotante de tipo string, este se redondeara al entero menor. 

>**boolean()**

Calcula el numero booleano de un numero.

# **NOTAS RAPIDAS**

>1. boolean([]) -> true
>2. boolean(![]) -> false
>3. [] == ![] -> true // Ambos son booleans? -> si
>4. [] === ![] -> false // Ambos son booleans y del mismo tipo? -> no
>5.


