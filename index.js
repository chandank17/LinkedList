class LinkedList {
    constructor() {
        this.nodes = [];
    }

    size() {
        return this.nodes.length;
    }

    head() {
        return this.size() ? this.nodes[0] : null;
    }

    tail() {
        return this.size() ? this.nodes[this.size() - 1] : null;
    }

    insertAt(index, value) {
        const previousNode = this.nodes[index - 1] || null;
        const nextNode = this.nodes[index] || null;
        const node = { value, next: nextNode };
        if (previousNode) {
            this.nodes[index - 1].next = node;
        }

        this.nodes.splice(index, 0, node);
    }

    insert(value) {
        this.insertAt(this.size(), value);
    }

    removeAt(index) {
        const previousNode = this.nodes[index - 1];
        const nextNode = this.nodes[index + 1] || null;
        if (previousNode) {
            this.nodes[index - 1].next = nextNode;
        }
        this.nodes.splice(index, 1);
    }

    get() {
        return this.nodes;
    }

    keys() {
        return this.nodes.map((v) => v.value);
    }
}

const linkedList = new LinkedList();
linkedList.insertAt(0, 'Grand Father');
linkedList.insertAt(1, 'Wife');
linkedList.insertAt(2, 'Child1');
linkedList.insert('Child2');
console.log(linkedList.get());
console.log(linkedList.keys());
