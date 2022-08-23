class Queue {
    constructor() {
        this.items = {};
        this.front = 0;
        this.rear  = 0;
    }

    enqueue(element) {
        this.items[this.rear] = element;
        this.rear++;
    }

    dequeue() {
        const item =  this.items[this.front];
        delete this.items[this.front];
        this.front++;

        return item;
    }

    isEmpty() {
        return this.rear - this.front === 0
    }

    size() {
        return this.rear - this.front
    }

    peek() {
        return (this.isEmpty()) ? null : this.items[this.front];
    }

    print() {
        console.log(this.items);
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
console.log(queue.dequeue());
console.log(queue.peek());
queue.print();