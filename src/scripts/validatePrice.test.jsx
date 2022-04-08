import validatePrice from "./validateprice";

test("Should pass if value is positive", () => {
  const usedValue = "100";
  const error = " ";

  const result = validatePrice(usedValue);

  expect(result.data).toBe(100);
  expect(result.error).toBe(" ");
});

test("Should fail if value is empty", () => {
  const usedValue = " ";
  const error = "Price must be greater than zero";

  const result = validatePrice(usedValue);

  expect(result.data).toBe(" ");
  expect(result.error).toBe(error);
});

test("Should fail if value is negative", () => {
  const usedValue = "-100";
  const error = "Price must be greater than zero";

  const result = validatePrice(usedValue);

  expect(result.data).toBe(" ");
  expect(result.error).toBe(error);
});

test("Should fail if value is zero", () => {
  const usedValue = "0";
  const error = "Price must be greater than zero";

  const result = validatePrice(usedValue);

  expect(result.data).toBe(" ");
  expect(result.error).toBe(error);
});
