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

    multiply: function (a, b) {
        a = this.toNumber(a);
        b = this.toNumber(b);
        return a * b;
    },
};
