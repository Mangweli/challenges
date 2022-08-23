class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
       return this.items.push(element);
    }

    pop() {
        return this.items.pop();
    }

    peek(element) {
        return this.items[this.items.length -1];
    }

    isEmpty() {
        return this.items.length === 0
    }

    print() {
        console.log(this.items.toString());
    }

    size() {
       return this.items.length
    }


}

const stack = new Stack();

console.log(stack.isEmpty());

stack.push(2);
stack.push(19);
stack.push(24);
stack.push(23);

console.log(stack.size());
console.log(stack.pop());
console.log(stack.peek());
stack.print();