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

export const calculator = {};
