class Stack {
    constructor() {
        this.item = []
    }

    push(value) {
        this.item.unshift(value);
    }

    pop() {
        return this.item.shift();
    }

    peek() {
        return this.item;
    }

    isEmpty() {
        return this.item.length === 0;
    }
}


const stack = new Stack();

stack.push('apples');
stack.push('oranges');
stack.push('pears');
console.log(stack.isEmpty());    // true

stack.peek();       // 'pears'
console.log(stack.peek());

stack.pop();        // 'pears'
stack.pop();        // 'oranges'
stack.pop();        // 'oranges'

console.log(stack.isEmpty());    // true

