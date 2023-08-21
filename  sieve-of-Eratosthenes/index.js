const sieveOfEratosthenes = (n) => {
    const simple = [];
    const notSimple = new Set();
    
    for (let i = 2; i <= n; i++) {
        if (notSimple.has(i)) continue;
        simple.push(i);
        
        for (let j = i + 1; j <= n; j++) {
            if (j % i === 0) {
                notSimple.add(j);
            }
        }
    }
    return simple;
};