class DoubleLinkedList {
    constructor() {
        this.nodes = [];
    }

    size() {
        return this.nodes.length;
    }

    insertAt(index, value) {
        const previousNode = this.nodes[index - 1] || null;
        const nextNode = this.nodes[index] || null;

        const node = { value, next: nextNode, previous: previousNode };

        if (previousNode) {
            this.nodes[index - 1].next = node;
        }

        if (nextNode) {
            this.nodes[index].previous = node;
        }

        this.nodes.splice(index, 0, node);
    }

    insertLast(value) {
        this.insertAt(this.size(), value);
    }

    insertFirst(value) {
        this.insertAt(0, value);
    }

    get() {
        return this.nodes;
    }

    keys() {
        return this.nodes.map((v) => v.value);
    }

    clear() {
        return this.nodes = [];
    }
}

const double = new DoubleLinkedList();
double.insertLast('Grand Father');
double.insertLast('Father');
double.insertLast('Mother');
double.insertLast('Me');
double.insertLast('Brother');
console.log(double.get());

console.log(double.keys());