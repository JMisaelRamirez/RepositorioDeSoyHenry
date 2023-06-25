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
    
    isPalindrome(head){
        if(!head.next) return true;

        let rapido = head;
        let lento = head;
        let medio;
        while(rapido.next && rapido.next.next){
            rapido = rapido.next.next;
            lento = lento.next;
        }
        
        medio = lento;
        console.log(medio)

        // Obtener el nodo de la izquierda. 
        let izquierdo;
        let anterior = null;
        let actual = medio;
        let siguiente;
        while(actual){
            siguiente = actual.next;
            actual.next = anterior;
            anterior = actual;
            actual = siguiente;
        }
        izquierdo = anterior;
        
        // Hacer la comparacion. 
        while(izquierdo.next) {
            if(head.value !== izquierdo.value) return false
            head = head.next;
            izquierdo = izquierdo.next;
        }

        return true


    } 
}


l1 = new Node(2);
l1.add(1);
console.log(l1.isPalindrome(l1));