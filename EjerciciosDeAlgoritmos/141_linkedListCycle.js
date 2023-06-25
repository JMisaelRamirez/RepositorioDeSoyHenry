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

    hasCycle (list) {
        if(!list) return false
        let lento = list;
        let rapido = list.next;
        while(lento !== rapido){
            if(!rapido || !rapido.next){ // es importante esta evaluacion. 
                return false
            }else {
                lento = lento.next;
                rapido = rapido.next.next;
            }
        }
        return true
    }
}


l2 = new Node(1);
l2.add(2);
l1 = new Node(1);
l1.add(2);
l1.add(3); 
l1.add(10);// l1 = {value:1, next: {value:2, next: {value:3, next = {value:10, next = null}}}
l1.next.next.next.next = l1.next
//console.log(l1.hasCycle(l1))
console.log(l1.hasCycle(l2))
//console.log(l1.next.next.next.next);