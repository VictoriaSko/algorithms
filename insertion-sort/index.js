const insertionSort = (array) => {
    const resultArray = [...array];
    
    for (let i = 1; i < resultArray.length; i++) {
        let currentIndex = i;
        
        for (let j = i - 1; j >= 0; j--) {
            if (resultArray[currentIndex] < resultArray[j]) {
                const current = resultArray[currentIndex];
                resultArray[currentIndex] = resultArray[j];
                resultArray[j] = current;
                currentIndex = j;
            } else {
                break;
            }
        }
    }
         
    return resultArray;
}