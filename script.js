class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(head){
        this.head = head;
    }

    append(value){
        let node = this.head;
        if(node === null){
            this.head = value;
            return;
        }
        while (node.next) {
            node = node.next;
        }
        node.next = value;
    }

    prepend(value){

    }

    size(){

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
//( value ) -> ( value ) -> ( value ) -> null
let node1 = new Node(5);
let node2 = new Node(3);
let node3 = new Node(9);
let list = new LinkedList(node1);
list.append(node2);
list.append(node3);

list.toString()

