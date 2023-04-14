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
  this.rigth = null;
}

BinarySearchTree.prototype.insert = function(nodeValue){
  if(nodeValue > this.value){ // Derecha
    if(this.rigth !== null){
      this.rigth = new BinarySearchTree(nodeValue);
      return
    }
    this.rigth.insert(nodeValue);

  } else {
    if(this.left !== null){
      this.left = new BinarySearchTree(nodeValue);
      return
    }
    this.left.insert(nodeValue);
  }
  
}
BinarySearchTree.prototype.size = function(){
  // Se hace le recorrido y se define un contador
}
BinarySearchTree.prototype.contains = function(){
  // Recorrido, hacemos uns instancia, en la condicion principal 
  // definimos si existe ese valor en el nodo actual
}
BinarySearchTree.prototype.depthFirstForEach = function(){
  // Implementar cada uno de los recorridos. Se utilza un sqitch case para caso

}
BinarySearchTree.prototype.breadthFirstForEach = function(){
  // Recorre el arbol siguiente la definicion del recorrido. 
}
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
