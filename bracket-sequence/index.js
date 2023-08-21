const openBrackerts = {
    '(': ')',
    '[': ']',
    '{': '}',
};

const closeBrackets = {
    ')': '(',
    ']': '[',
    '}': '{',
};

const isOpenBracket = (char) => {
    return openBrackerts.hasOwnProperty(char);
}

const isCloseBracket = (char) => {
    return closeBrackets.hasOwnProperty(char);
}

const bracketSequence = (string) => {
    const stack = [];
    for (let i = 0; i < string.length; i++) {
        const char = string[i];
        if (isOpenBracket(char)) {
            stack.push(char);
        } else if (isCloseBracket(char)) {
            const lastChar = stack.pop();
            if (closeBrackets[char] !== lastChar) {
                return false; 
            }
        }
    }
    if (stack.length > 0) return false;
    return true;
};
