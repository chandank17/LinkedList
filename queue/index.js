class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(value) {
        return this.items.push(value);
    }

    dequeue() {
        return this.items.shift();
    }

    size() {
        return this.items.length;
    }

    isEmpty() {
        return this.items.length === 0;
    }

    get() {
        return this.items;
    }

    peek() {
        return this.items[0];
    }
}

const queue = new Queue();

queue.isEmpty();    // true

queue.enqueue('A');
queue.enqueue('B');
queue.enqueue('C');
queue.enqueue('D');
queue.enqueue('E');

queue.isEmpty();    // false

queue.peek();       // 'A'

queue.dequeue();    // 'A'
queue.dequeue();    // 'B'
queue.dequeue();    // 'C'

console.log(queue.get());