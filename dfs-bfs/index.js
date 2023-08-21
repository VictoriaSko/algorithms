const dfs = (tree, callback) => {
    const stack = [tree];
    while(stack.length) {
        const currentValue = stack.pop();
        callback(currentValue);
        
        const children = currentValue.children;
        stack.push(...children);
    }
}

const bfs = (tree, callback) => {
    let queue = [tree];
    while (queue.length) {
        const newQueue = [];
        
        for (let i = 0; i < queue.length; i++) {
            callback(queue[i]);
            newQueue.push(...queue[i].children);
        }
        queue = newQueue;
    }
}