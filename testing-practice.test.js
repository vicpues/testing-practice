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

describe("calculator", () => {
    describe("add", () => {
        it("Exists", () => expect(calculator.add).not.toBeUndefined());

        it("Adds two integers", () => {
            expect(calculator.add(2, 3)).toEqual(5);
            expect(calculator.add(10, 11)).toEqual(21);
            expect(calculator.add(1001, 345)).toEqual(1346);
        });

        it("Adds floating point numbers", () =>
            expect(calculator.add(0.2, 1)).toBeCloseTo(1.2));

        it("Converts strings to numbers", () =>
            expect(calculator.add("2", "3")).toEqual(5));

        it("Deals with non-convertible strings", () =>
            expect(() => calculator.add(5, "banana")).toThrow(TypeError));

        it("Deals with other invalid types", () =>
            expect(() => calculator.add(null, null)).toThrow(TypeError));

        it("Deals with invalid number of args", () =>
            expect(() => calculator.add(3)).toThrow(TypeError));
    });
});
