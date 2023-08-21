const selectionSort = (array) => {
    const resultArray = [...array];
    for (let i = 0; i < resultArray.length; i++) {
        const curr = resultArray[i];
        let localMin = {
            value: resultArray[i],
            index: i,
        };
        for (let j = i + 1; j < resultArray.length; j++) {
            if (resultArray[j] < localMin.value) {
                localMin.value = resultArray[j];
                localMin.index = j;
            }
        }
        resultArray[i] = localMin.value;
        resultArray[localMin.index] = curr;
    } 
    return resultArray;
}
