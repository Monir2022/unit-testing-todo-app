import { render, screen } from '@testing-library/react';
import { fireEvent } from '@testing-library/react';


import ShoppingScreen from './screens/ShoppingScreen';
import { RecoilRoot } from "recoil";
import App from './App';

test("Expected to show the Welcome screen if the todo list is empty", () => {
  // Arrange
  render(
    <RecoilRoot>
      <App />
    </RecoilRoot>
  );
  const data = [];
  Storage.prototype.getItem = jest.fn(() => JSON.stringify(data));  

  // Act
  const textElement = screen.queryByText(/eika shopping list/i);

//Assert
  expect(textElement).toBeInTheDocument();
});


test("Expected to show the shopingscreen if the todo list has one or more items", () => {

  // Arrange
  const {queryByTestId} = render(
    <RecoilRoot>
      <ShoppingScreen />
    </RecoilRoot>)

  const data = [{
    id: 1,
    name: "Table",
    price: 100,
    acquired: false
  }
   ];
  
   
  Storage.prototype.getItem = jest.fn(() => JSON.stringify(data));
  

  // Act
 
  const divElement = queryByTestId("shopping-screen")

  // Assert
  expect(divElement).toBeTruthy();
});

/*
test("Adds an item when filling the form correctly", () => {
  // Arrange
  const correctName = "Table";
  const correctPrice = "500";

  render(<RecoilRoot>
    <App />
  </RecoilRoot>);

  // Act
  // Step 1
  const firstButton = screen.getByText(/add item/i);
  fireEvent.click(firstButton);

  // Step 2
  const writeName = screen.getByLabelText(/product name/i);
  const writePrice = screen.getByLabelText(/product price/i);
  const secondButton = screen.queryByText(/submit/i);
  fireEvent.change(writeName, { target: { value: correctName } });
  fireEvent.change(writePrice, { target: { value: correctPrice } });
  fireEvent.click(secondButton);

  // Step 3
  const newTasks = screen.queryByText(/table, 500:-/i);

  // Assert
  expect(newTasks).toBeInTheDocument();
});


*/
