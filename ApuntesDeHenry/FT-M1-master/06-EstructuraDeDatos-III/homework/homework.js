"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
// 2do caso: Ingreso: 6
      //       5
      //     /   \
      //    4     7 6
      //  /  \   / \
      // n    n n   n
      //
function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.insert = function(nodeValue){
  if(nodeValue > this.value){ // Derecha
    if(this.right === null){
      this.right = new BinarySearchTree(nodeValue);
    } else this.right.insert(nodeValue);
    
  } else { // Izquierda
    if(this.left === null){ // Si es vacio el espacio
      this.left = new BinarySearchTree(nodeValue);
    } else this.left.insert(nodeValue); // Se llama la funcion a ese nod
  }
}

BinarySearchTree.prototype.size = function(){
  // Se hace le recorrido y se define un contador
  if(this.left === null && this.right === null) return 1;
  if(this.left !== null && this.right === null) return 1 + this.left.size();
  if(this.left === null && this.right !== null) return 1 + this.right.size();
  if(this.left !== null && this.right !== null) return 1 + this.left.size() + this.right.size();
}

BinarySearchTree.prototype.contains = function(value){
  // Recorrido, hacemos uns instancia, en la condicion principal 
  // definimos si existe ese valor en el nodo actual
  if(this.value === value) return true;
  if(value < this.value){
    if(this.left !== null){
      return this.left.contains(value);
    } else return false;
  }  
  if(value > this.value){
    if(this.right !== null){
      return this.right.contains(value);
    } else return false;
  } 
}

BinarySearchTree.prototype.depthFirstForEach = function(cb, mode){
  // Implementar cada uno de los recorridos. Se utilza un sqitch case para caso
  // Pre order -> root left right
  // In order -> left root right
  // Post order -> left right root
  //
  switch(mode){
  case 'pre-order':
    cb(this.value);
    if(this.left !== null) this.left.depthFirstForEach(cb, mode);
    if(this.right !== null) this.right.depthFirstForEach(cb, mode);
    break
  case 'post-order':
    if(this.left !== null) this.left.depthFirstForEach(cb, mode);
    if(this.right !== null) this.right.depthFirstForEach(cb, mode);
    cb(this.value);
    break
  case 'in-order':
    if(this.left !== null) this.left.depthFirstForEach(cb, mode);
    cb(this.value);
    if(this.right !== null) this.right.depthFirstForEach(cb, mode);
    break
  default:
    if(this.left !== null) this.left.depthFirstForEach(cb, mode);
    cb(this.value);
    if(this.right !== null) this.right.depthFirstForEach(cb, mode);
    break
  }
}

BinarySearchTree.prototype.breadthFirstForEach = function(cb, array = []){ // Si no se define el parametro array al momento
  // de llamar a la funcion por default este parametro sera []
  // Recorre el arbol siguiente la definicion del recorrido. 
  if(this.left !== null){
    array.push(this.left);
  }
  if(this.right !== null){
    array.push(this.right);
  }
  cb(this.value);
  if(array.length > 0){
    array.shift().breadthFirstForEach(cb,array)
  }
}

// 
// Array: [J]
// Nodo Actual: []

//Callback: cb([A,B,C,D,E,F,H,I,J])
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
