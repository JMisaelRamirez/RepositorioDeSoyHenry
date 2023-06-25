class Node {
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

function reverse(list){
    
} 
l1 = new Node(1);
l1.add(2);
l1.add(3); 
l1.add(3);
l1.add(2);
l1.add(1); 
l1.add(10);// l1 = {value:1, next: {value:2, next: {value:3, next = {value:10, next = null}}}

console.log(revrese(l1));

if(null){
    console.log("hola")
}else console.log("adios")
