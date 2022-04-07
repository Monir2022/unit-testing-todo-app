import { getAllByTestId, render, screen } from '@testing-library/react';
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
  render(
    <RecoilRoot>
      <App />
    </RecoilRoot>)

  const item = {
    id: 1,
    name: "Table",
    price: "100",
    showAcquired: false,
  };
  const data = [item];

  Storage.prototype.getItem = jest.fn(() => JSON.stringify(data));

  

  // Act
 
  const textElement = screen.queryByText(/sort by:/i);

  // Assert
  expect(textElement).toBeInTheDoccument();
});




