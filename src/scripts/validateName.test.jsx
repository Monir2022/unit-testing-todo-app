import validateName from "./validatename";

test("Should pass if everything is ok", () => {
//Arrange
    const usedValue = "Table";
    const error = "You need a item name to start";

//Acts  
    const result = validateName(usedValue);
    
 //Assert 
    expect(result.data).toBe(usedValue);
    expect(result.error).toBe(" ");
  });

test("Should fails if text field is empty", () => {
//Arrange
  const usedValue = " ";
  const error = "You need a item name to start";

//Acts
  const result = validateName(usedValue);

//Assert
  expect(result.data).toBe(" ");
  expect(result.error).toBe(error);
});

test("Should fails if text is only the empty string", () => {
//Arrange
  const usedValue = "           ";
  const error = "You need a item name to start";

//Acts
  const result = validateName(usedValue);

//Assert
  expect(result.data).toBe(" ");
  expect(result.error).toBe(error);
});


