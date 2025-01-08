import { capitalize } from "./testing-practice";

it("Works", () => expect(true).toBe(true));

it("Imported", () => expect(capitalize).not.toBeUndefined());

it("Returns a string", () =>
    expect(typeof capitalize("sandwich")).toBe("string"));

it("Capitalizes", () => expect(capitalize("duck")).toBe("Duck"));

it("Deals with empty strings", () => expect(capitalize("")).toBe(""));

it("Deals with non-string values", () => {
    expect(capitalize()).toBeUndefined();
    expect(capitalize(null)).toBeNull();
});
