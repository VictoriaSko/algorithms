const mergeSort = (array) => {
    if (array.length === 0) return [];
    return sortMiniArray(array);
}

const sortMiniArray = (array) => {
    if (array.length > 2) {
        const middle = Math.floor(array.length / 2);
        const leftPart = sortMiniArray(array.slice(0, middle));
        const rightPart = sortMiniArray(array.slice(middle));
        
        let leftIndex = 0;
        let rightIndex = 0;
        let resultArray = [];
        for (let i = 0; i < array.length; i++) {
            const left = leftPart[leftIndex] || Number.MAX_SAFE_INTEGER;
            const right = rightPart[rightIndex] || Number.MAX_SAFE_INTEGER;
            if (left < right) {
                resultArray[i] = left;
                leftIndex++;
            } else {
                resultArray[i] = right;
                rightIndex++;
            }
        }
        return resultArray;
    } else {
        if (array.length === 1) return [array[0]];
        if (array[0] < array[1]) return [array[0], array[1]];
        return [array[1], array[0]];
    }
}