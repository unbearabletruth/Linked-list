class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(head){
        this.head = head;
    }

    append(value){
        let node = new Node(value);
        if (this.head === null){
            this.head = node;
        }
        let current = this.head;
        while (current.next){
            current = current.next;
        }
        current.next = node;
    }
    

    prepend(value){
        let node = new Node(value);
        if (this.head === null){
            this.head = node;
        }
        let previousHead = this.head;
        this.head = node;
        node.next = previousHead;
    }

    size(){
        let node = this.head;
        let NodeCounter = 0;
        while (node){
            node = node.next;
            NodeCounter++;
        }
        return NodeCounter;
    }

    getHead(){

    }

    getTail(){

    }

    at(index){

    }

    pop(){

    }

    contains(value){

    }

    find(value){

    }
    toString(){
        let string = "";
        let current = this.head;
        while(current) {
            string += (`( ${current.value} ) -> `)
            current = current.next;
        }
        string += ("null");
        console.log(string);
    }
}

let node1 = new Node(5);
let list = new LinkedList(node1);
list.append(7);
list.append(9);
list.prepend(3);
list.prepend(2);
console.log(list.size());

list.toString()

