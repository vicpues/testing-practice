import { capitalize } from "./testing-practice";

it("Works", () => expect(true).toBe(true));

it("Imported", () => expect(capitalize).not.toBeUndefined());

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
