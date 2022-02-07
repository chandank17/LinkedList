A queue is a linear data structure that behaves like a real-world queue. It follows a first in, first out (FIFO) order of operations, similar to its real-world counterpart. This means that new items are added to the end of the queue, whereas items are removed from the start of the queue.

The main operations of a queue data structure are:

enqueue: Adds an element to the end of the queue
dequeue: Removes an element from the start of the queue
peek: Retrieves the element at the start of the queue, without removing it
isEmpty: Checks if the queue is empty


Create a class with a constructor that initializes an empty array, items, for each instance.
Define an enqueue() method, which uses Array.prototype.push() to add an element to the end of the items array.
Define a dequeue() method, which uses Array.prototype.shift() to remove an element from the start of the items array.
Define a peek() method, which retrieves the value of the first element in the items array, without removing it.
Define an isEmpty() method, which uses Array.prototype.length to determine if the items array is empty.