class QueueNode {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class TempQueue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.oldTail = null;
    }

    add(value) {
        if (!this.head) {
            this.head = new QueueNode(value);
            this.tail = this.head; 
        } else {
            const currentTail = this.tail;
            this.tail = new QueueNode(value);
            currentTail.next = this.tail;
            this.tail.prev = currentTail;
        }
    }

    saveTail() {
        this.oldTail = this.tail;
    }

    clearFromOldTail() {
        if (this.oldTail) {
            this.head = this.oldTail.next;
            if (this.head) {
                this.head.prev = null;
            }
            this.oldTail = null;
        }
    }

    clear() {
        this.head = null;
        this.tail = null;
    }
}

const bfs = (tree, callback) => {
    const queue = new TempQueue();
    queue.add(tree);
    while (queue.head !== null) {
        let current = queue.head;
        
        while(current !== null) {
            queue.saveTail();
            callback(current.value);
            
            const children = current.value.children;
            for (let i = 0; i < children.length; i++) {
                  queue.add(children[i]);
            }
            current = current.next;
        }
        queue.clearFromOldTail();
    }
};