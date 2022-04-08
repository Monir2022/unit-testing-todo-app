import validatePrice from "./validateprice";

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

/*
test("fails if value is 0", () => {
  const inputedValue = "0";
  const error = "Price must be greater than 0";

  const result = validatePrice(inputedValue, error);

  expect(result.validValue).toBe("");
  expect(result.errorMessage).toBe(error);
});


test("passes if value is positive", () => {
  const inputedValue = "20";
  const error = "Price must be greater than 0";

  const result = validatePrice(inputedValue, error);

  expect(result.validValue).toBe("20");
  expect(result.errorMessage).toBe("");
});

*/