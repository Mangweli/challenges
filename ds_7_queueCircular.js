class Queue {
    constructor(maxSize) {
        this.items   = {};
        this.maxSize = maxSize;
        this.rear    = 0;
        this.front   = 0;
    }

    size() {
        return this.rear - this.front
    }

    isFull() {
        return this.size() === this.maxSize
    }

    isEmpty() {
        return this.rear - this.front === 0
    }

    enqueue(element) {
        if(this.isFull()) return false;

        this.items[this.rear] = element;
        this.rear++;

        return element;
    }

    dequeue() {
        if(this.isEmpty()) return null
        
        const item = this.items[this.front];

        delete this.items[this.front];
        this.front++;
        return item;
    }

    peek() {
        if(this.isEmpty()) return null;

        return this.items[this.front];
    }

    print() {
        console.log(this.items);
    }


}

const queue = new Queue(3);
console.log("Size ----",queue.size());
console.log("Peek ----",queue.peek());
console.log("Empty ---", queue.isEmpty());
console.log("Full ---", queue.isFull());
queue.enqueue(2);
queue.enqueue(4);
queue.enqueue(6);
console.log(queue.enqueue(8));
console.log("Size ----",queue.size());
console.log("Peek ----",queue.peek());
console.log("Empty ---", queue.isEmpty());
console.log("Full ---", queue.isFull());
console.log(queue.size());
console.log(queue.dequeue());
console.log(queue.peek());
queue.print();
console.log(queue.enqueue(8));
queue.print();