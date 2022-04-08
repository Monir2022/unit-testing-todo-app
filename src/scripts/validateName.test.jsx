import validateName from "./validatename";

test("Should pass if everything is ok", () => {
    const usedValue = "Table";
    const error = "You need a item name to start";
  
    const result = validateName(usedValue);
  
    expect(result.data).toBe(usedValue);
    expect(result.error).toBe(" ");
  });

test("Should fails if text field is empty", () => {
  const usedValue = " ";
  const error = "You need a item name to start";

  const result = validateName(usedValue);

  expect(result.data).toBe(" ");
  expect(result.error).toBe(error);
});

test("Should fails if text is only the empty string", () => {
  const usedValue = "           ";
  const error = "You need a item name to start";

  const result = validateName(usedValue);

  expect(result.data).toBe(" ");
  expect(result.error).toBe(error);
});


