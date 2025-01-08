export function capitalize(string) {
    const firstChar = string[0].toUpperCase();
    const restOfString = string.slice(1);
    return `${firstChar}${restOfString}`;
}
