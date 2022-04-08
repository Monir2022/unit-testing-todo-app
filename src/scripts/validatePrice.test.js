import validatePrice from "./validateprice";

test("Should pass if value is positive", () => {
//Arrange
  const usedValue = "100";
  const error = " ";

//Acts
  const result = validatePrice(usedValue);

//Assert
  expect(result.data).toBe(100);
  expect(result.error).toBe(" ");
});

test("Should fail if value is empty", () => {
//Arrange
  const usedValue = " ";
  const error = "Price must be greater than zero";

//Acts
  const result = validatePrice(usedValue);

//Assert
  expect(result.data).toBe(" ");
  expect(result.error).toBe(error);
});

test("Should fail if value is negative", () => {
//Arrange
  const usedValue = "-100";
  const error = "Price must be greater than zero";

//Acts
  const result = validatePrice(usedValue);

//Assert
  expect(result.data).toBe(" ");
  expect(result.error).toBe(error);
});

test("Should fail if value is zero", () => {
//Arrange
  const usedValue = "0";
  const error = "Price must be greater than zero";

//Acts
  const result = validatePrice(usedValue);
  
//Assert
  expect(result.data).toBe(" ");
  expect(result.error).toBe(error);
});
