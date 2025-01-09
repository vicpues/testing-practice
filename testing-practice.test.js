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
    describe("toNumber", () => {
        it("Exists", () => expect(calculator.toNumber).not.toBeUndefined());

        it("Converts strings to numbers", () =>
            expect(calculator.toNumber("2")).toEqual(2));

        it("Deals with non-convertible strings", () =>
            expect(() => calculator.toNumber("banana")).toThrow(TypeError));

        it("Deals with other invalid types", () =>
            expect(() => calculator.toNumber(null)).toThrow(TypeError));

        it("Deals with invalid number of args", () =>
            expect(() => calculator.toNumber()).toThrow(TypeError));
    });

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

    describe("subtract", () => {
        it("Exists", () => expect(calculator.subtract).not.toBeUndefined());

        it("Subtracts an integer from another", () => {
            expect(calculator.subtract(3, 2)).toEqual(1);
            expect(calculator.subtract(20, 11)).toEqual(9);
            expect(calculator.subtract(1001, 345)).toEqual(656);
        });

        it("Subtracts floating point numbers", () =>
            expect(calculator.subtract(0.2, 1)).toBeCloseTo(-0.8));

        it("Deals with non-convertible strings", () =>
            expect(() => calculator.subtract(5, "banana")).toThrow(TypeError));

        it("Deals with other invalid types", () =>
            expect(() => calculator.subtract(null, null)).toThrow(TypeError));

        it("Deals with invalid number of args", () =>
            expect(() => calculator.subtract(3)).toThrow(TypeError));
    });

    describe("multiply", () => {
        it("Exists", () => expect(calculator.multiply).not.toBeUndefined());

        it("Multiplies two integers", () => {
            expect(calculator.multiply(2, 3)).toEqual(6);
            expect(calculator.multiply(10, 11)).toEqual(110);
            expect(calculator.multiply(1001, 345)).toEqual(345345);
        });

        it("Multiplies floating point numbers", () =>
            expect(calculator.multiply(0.2, 2)).toBeCloseTo(0.4));

        it("Converts strings to numbers", () =>
            expect(calculator.multiply("2", "3")).toEqual(6));

        it("Deals with non-convertible strings", () =>
            expect(() => calculator.multiply(5, "banana")).toThrow(TypeError));

        it("Deals with other invalid types", () =>
            expect(() => calculator.multiply(null, null)).toThrow(TypeError));

        it("Deals with invalid number of args", () =>
            expect(() => calculator.multiply(3)).toThrow(TypeError));
    });
});
