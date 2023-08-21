const selectionSort = (array) => {
    const resultArray = [...array];
    for (let i = 0; i < array.length; i++) {
        const curr = array[i];
        let localMin = {
            value: array[i],
            index: i,
        };
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < localMin.value) {
                localMin.value = array[j];
                localMin.index = j;
            }
        }
        array[i] = localMin.value;
        array[localMin.index] = curr;
    } 
    return resultArray;
}
