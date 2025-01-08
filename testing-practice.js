export function capitalize(string) {
    if (typeof string !== "string") return string;
    if (string.length === 0) return string;

    const firstChar = string[0].toUpperCase();
    const restOfString = string.slice(1);

    return `${firstChar}${restOfString}`;
}
