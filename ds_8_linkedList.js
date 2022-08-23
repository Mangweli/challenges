class Node {
    constructor(value) {
        this.value = value;
        this.next  = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0
    }

    getSize() {
        return this.size;
    }

    prepend(value) {
        const node = new Node(value);
        // if(!this.isEmpty()) {
        //     this.head = node;
        // } else {
        //     node.next = this.head;
        //     this.head = node;
        // }

        // this.size++;

        if(!this.isEmpty()) {
            node.next = this.head;
        }

        this.head = node;
        this.size++;
    }

    append(value) {
        const node = new Node(value);

        if(this.isEmpty()) {
            this.head = node;
        }else{
            let prev = this.head;

            while(prev.next) {
                prev = prev.next;
            }
            prev.next = node;
        }
        this.size++
    }

    insert(value, index) {
        if(index < 0 || index > this.size || this.isEmpty()) {
            console.log("Invalid Index or the list is empty");
            return false;
        }

        if(index === 0) {
            this.prepend(value);

            return true;
        }

        if(index === this.size - 1) {
            this.append(value);
            return true;
        }

        const node = new Node(value);
        let prev   = this.head;

        for(let i = 1; i <= this.size; i++) {
            if(i == index) {
                prev.next;
                break;
            }
        }

    }

    print() {
        if(this.isEmpty()) {
            console.log("The List is empty");
        }else {
            let curr = this.head;
            let listValues = '';

            while(curr) {
                listValues += `${curr.value} `;
                curr = curr.next;
            }

            console.log(listValues);
        }
    }
}

const list = new LinkedList()

console.log("List is Empty?", list.isEmpty());
console.log("List Size", list.getSize());
list.print()
list.prepend(10);
list.print()
list.prepend(20);
list.print()
list.prepend(30);
list.append(99);
list.print()
console.log("List is Empty?", list.isEmpty());
console.log("List Size", list.getSize());
list.print()