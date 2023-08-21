const bfsGraph = (tree, callback) => {
    let queue = [tree];

    const cache = new Set();
    while (queue.length) {
        const newQueue = [];
        
        for (let i = 0; i < queue.length; i++) {
            if (!cache.has(queue[i])) {
                callback(queue[i]);
                cache.add(queue[i]);
            }
            newQueue.push(...queue[i].children.filter(c => !cache.has(c)));
        }
        queue = newQueue;
    }
}
