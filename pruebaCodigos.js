// ALGORITMO 1
/*class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }

    add (value) {
        let newNode = new Node(value);
        if(!this.next){
            this.next = newNode;
        }else {
            this.next.add(value);
        }
    }
}

function unirListas(list1, list2){
    if(!list1){
        return list2;
    }
    if(!list2){
        return list1;
    }
    if(list1.value < list2.value){
        list1.next = unirListas(list1.next, list2) 
        return list1
    }else{
        list2.next = unirListas(list1, list2.next)
        return list2
    }

}

l1 = new Node(1);
l1.add(2);
l1.add(3); // l1 = {value:1, next: {value:2, next: {value:3, next = null}}
l2 = new Node(2);
l2.add(4);
l2.add(5); // l2 = {value:2, next: {value:4, next: {value:5, next = null}}
// OUTPUT = [1 2 2 3 4 5]
let union = unirListas(l1,l2)
console.log(union.next.next.next)*/

// ALGORTIMO 2
/*
let data = [1, 2, 3, 'A', 5, 6, 6, 6, 8, 'A', 2] // [1, 2, 2]    // 1. Esta en el diccionario
 dictinary = {
    1: key,
    2: key,

    let que = [] 
}

function removeDuplicate(data){
    let diccionario = {}; // Seria bueno utilizar new Set() 
    let orderData = []
    for (let i = 0; i < data.length; i++) {
        if(!diccionario[data[i]]){
            diccionario[data[i]] = 'key'; // Una buena practica es colocar true. 
            orderData.push(data[i])
        }
    }
    return orderData;
}

console.log(removeDuplicate(data));
*/


// ALGORITMO 3
/*let texto = ['H','O','L','A',' ','M','U','N','D','O']

// let 

function reverseText(data) {
    let reverseText = [];
    for(let i = 0; i<data.length; i++){
        reverseText[i] = data[data.length-i-1]; // 9 - 0
    }
    return reverseText;
}

console.log(reverseText(texto))
*/

// ALGORITMO 4 SUM 2


// Resumen:
// Sea -> 

/*let obj = {
    a: 'Misael',
    1: 'Numero',
    'A': "String"
}*/
// * Valor de un atributo con nombre -> obj.a
// * Valor de un atributo con nombre numeri o string -> obj[1] o obj['A']
// * Para cambiar el valor de un atributo -> obj.a = "Jenifer"  o obj[1] = "OtroNombre"
// * Eliminar un atributo de un objeto -> delete obj[1] o delete obj.a
// * para verificar si tiene la propiedad -> obj.hasOwnProperty(a) devulve true o false. 
// * Python: los metodos o la recursio se establecen colocando def.metodo()
// Objetos en python: 
/*
# Crear una hashtable
hash_table = {}

# Agregar elementos a la hashtable
hash_table["clave1"] = "valor1"
hash_table["clave2"] = "valor2"
hash_table["clave3"] = "valor3"

# Acceder a elementos en la hashtable
print(hash_table["clave1"])  # Output: "valor1"
print(hash_table["clave3"])  # Output: "valor3"

# Verificar si una clave existe en la hashtable
if "clave2" in hash_table:
    print("La clave2 existe en la hashtable")

# Eliminar un elemento de la hashtable
del hash_table["clave1"]

# Recorrer los elementos de la hashtable
for clave, valor in hash_table.items():
    print(clave, valor) 
*/

// DUDAS:
// * for (let item of array) {} Esto es igual que un map 