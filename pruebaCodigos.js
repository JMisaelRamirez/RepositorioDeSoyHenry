class Queue{
    constructor(){
        this.array = [];
    }
}

Queue.prototype.push = function(elem){
    this.array.push(elem);
}

Queue.prototype.shift = function(){
    return this.array.shift();
}

let QueueDePrueba = new Queue();
QueueDePrueba.push(1);  //[1]
QueueDePrueba.push(4);  //[1,4]
QueueDePrueba.push(5);  //[1,4,5]
QueueDePrueba.push(3);  //[1,4,5,3]
let i = QueueDePrueba.shift();
console.log(i); // i = 1
console.log(QueueDePrueba); // [4,5,3]