const bubbleSort = (array) => {
    while (true) {
        let isSorted = true;
        for (let i = 1; i < array.length; i++) {
            const prev = array[i - 1];
            const curr = array[i];
            
            if (prev > curr) {
                array[i - 1] = curr;
                array[i] = prev;
                isSorted = false;
            }
        }
        if (isSorted) break;
    }
}