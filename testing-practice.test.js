import { capitalize } from "./testing-practice";

it("Works", () => expect(true).toBe(true));

it("Imported", () => expect(capitalize).not.toBeUndefined());
