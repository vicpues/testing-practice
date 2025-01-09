export function capitalize(string) {
    if (typeof string !== "string") return string;
    if (string.length === 0) return string;

    const firstChar = string[0].toUpperCase();
    const restOfString = string.slice(1);

    return `${firstChar}${restOfString}`;
}

export function reverseString(string) {
    if (typeof string !== "string") return string;
    if (string.length === 0) return string;

    return string.split("").reverse().join("");
}

export const calculator = {
    toNumber: (num) => {
        const message = "Please use a number or number string";

        const typeNum = Number(num);
        if (num === null) throw new TypeError(message);
        if (isNaN(typeNum)) throw new TypeError(message);

        return typeNum;
    },

    add: function (a, b) {
        a = this.toNumber(a);
        b = this.toNumber(b);
        return a + b;
    },

    subtract: function (a, b) {
        a = this.toNumber(a);
        b = this.toNumber(b);
        return a - b;
    },

    divide: function (a, b) {
        a = this.toNumber(a);
        b = this.toNumber(b);
        return a / b;
    },

    multiply: function (a, b) {
        a = this.toNumber(a);
        b = this.toNumber(b);
        return a * b;
    },
};

export function caesarCipher(string, shiftAmount) {
    checkTypes();
    const output = [];

    for (let char of string) {
        const shifted = shift(char);
        output.push(shifted);
    }

    return output.join("");

    // Private
    function shift(char) {
        const letters = "abcdefghijklmnopqrstuvwxyz";

        const lower = char.toLowerCase();
        const index = letters.indexOf(lower);
        if (index === -1) return char;

        const newIndex = (index + shiftAmount) % letters.length;
        let newLetter = letters[newIndex];
        if (lower !== char) newLetter = newLetter.toUpperCase();

        return newLetter;
    }

    function checkTypes() {
        if (typeof string !== "string")
            throw new TypeError("First argument must be a string");

        if (typeof shiftAmount !== "number")
            throw new TypeError("Second argument must be a number");

        if (Math.floor(shiftAmount) !== shiftAmount)
            throw new TypeError("Shift amount must be an integer");
    }
}

export function analyzeArray(arr) {
    const length = arr.length;
    const average = arr.reduce((prev, curr) => prev + curr) / length;
    const min = arr.reduce((prev, curr) => (curr < prev ? curr : prev));
    const max = arr.reduce((prev, curr) => (curr > prev ? curr : prev));

    return { average, min, max, length };
}
