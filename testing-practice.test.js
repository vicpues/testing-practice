import { capitalize, reverseString, calculator } from "./testing-practice";

it("Works", () => expect(true).toBe(true));

it("Imported", () => {
    expect(capitalize).not.toBeUndefined();
    expect(reverseString).not.toBeUndefined();
    expect(calculator).not.toBeUndefined();
});

describe("Capitalize", () => {
    it("Returns a string", () =>
        expect(typeof capitalize("sandwich")).toBe("string"));

    it("Capitalizes", () => {
        expect(capitalize("duck")).toBe("Duck");
        expect(capitalize("mouse")).toBe("Mouse");
        expect(capitalize("yellow dog")).toBe("Yellow dog");
    });

    it("Deals with empty strings", () => expect(capitalize("")).toBe(""));

    it("Deals with non-string values", () => {
        expect(capitalize()).toBeUndefined();
        expect(capitalize(null)).toBeNull();
    });
});

describe("reverseString", () => {
    it("Deals with empty strings", () => expect(reverseString("")).toBe(""));

    it("Deals with non-string values", () => {
        expect(reverseString()).toBeUndefined();
        expect(reverseString(null)).toBeNull();
    });

    it("Reverses string", () => {
        expect(reverseString("Sandwich")).toBe("hciwdnaS");
        expect(reverseString("doG")).toBe("God");
        expect(reverseString("A nice breakfast")).toBe("tsafkaerb ecin A");
    });
});
