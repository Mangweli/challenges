class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        return this.items.shift()
    }

    isEmpty() {
        return this.items.length === 0
    }

    peek() {
        return (this.isEmpty()) ? null : this.items[0];
    }

    print() {
        console.log(this.items.toString());
    }
    
    size() {
        return this.items.length;
    }
}

const queue = new Queue();
console.log(queue.size());
console.log(queue.peek());
queue.enqueue(2);
queue.enqueue(4);
queue.enqueue(6);
queue.enqueue(8);
console.log(queue.size());
queue.dequeue();
console.log(queue.peek());
queue.print();

