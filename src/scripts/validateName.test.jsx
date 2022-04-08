import validateName from "./validatename";

test("fails if text is empty", () => {
  const usedValue = " ";
  const error = "You need a item name to start";

  const result = validateName(usedValue);

  expect(result.data).toBe(" ");
  expect(result.error).toBe(error);
});
/*
test("fails if text is only empty spaces", () => {
  const inputedValue = "           ";
  const error = "Name must be completed";

  const result = validateName(inputedValue, error);

  expect(result.validValue).toBe("");
  expect(result.errorMessage).toBe(error);
});

test("passes if text is regular characters", () => {
  const inputedValue = "Hello world";
  const error = "Name must be completed";

  const result = validateName(inputedValue, error);

  expect(result.validValue).toBe(inputedValue);
  expect(result.errorMessage).toBe("");
});
*/