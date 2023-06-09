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
            return
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
            return
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
        if (this.head === null){
            return "List is empty!"
        }
        return `Head: ( ${this.head.value} )`;
    }

    getTail(){
        if (this.head === null){
            return "List is empty!"
        }
        let node = this.head;
        while (node.next){
            node = node.next;
        }
        return `Tail: ( ${node.value} )`;
    }

    at(index){
        let node = this.head;
        let nodeIndex = 0;
        while (node){
            if (nodeIndex === index){
                return `at index ${index}: ( ${node.value} )`;
            }
            node = node.next;
            nodeIndex++;
        }
        return `no element at such index: ${index}`;
    }

    pop(){
        let node = this.head;
        let size = this.size();
        let index = 0;
        while (node){
            if (index === size - 2){
                node.next = null;
                return
            }
            node = node.next;
            index++;
        }
        this.head = null;
    }

    contains(value){
        let node = this.head;
        while(node){
            if(node.value === value){
                return true;
            }
            node = node.next;
        }
        return false;
    }

    find(value){
        let node = this.head;
        let index = 0;
        while(node){
            if(node.value === value){
                return `found at index: ${index}`;
            }
            node = node.next;
            index++;
        }
        return null;
    }

    insertAt(value, index){
        let node = new Node(value);
        if (index === 0){
            let previousHead = this.head;
            this.head = node;
            node.next = previousHead;
            return;
        }
        let current = this.head;
        let nodeIndex = 0;
        while (current){
            if (nodeIndex === index - 1){
                let temp = current.next;
                current.next = node;
                node.next = temp;
                return;
            }
            current = current.next;
            nodeIndex++;
        }
        console.log(`Can't insert at index: ${index}. Index out of reach.`);
    }

    removeAt(index){
        let node = this.head;
        if (index === 0){
            this.head = node.next;
            return;
        }
        let nodeIndex = 0;
        while (node){
            if(nodeIndex === index - 1){
                node.next = node.next.next;
            }
            node = node.next;
            nodeIndex++;
        }
        console.log(`Can't remove at index: ${index}. No such index.`);
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
list.pop()
console.log(list.getTail())
list.prepend(9);
list.removeAt(0)
list.append(9);
list.prepend(3);
list.prepend(2);
console.log(list.getHead())
console.log(list.getTail())
console.log(list.at(5))
list.pop()
console.log(list.contains(9))
console.log(list.find(2))
list.insertAt(20, 0)
console.log(list.size());
list.insertAt(29, 4)
list.removeAt(20)
list.append(9);
console.log(list.size());
list.toString()

