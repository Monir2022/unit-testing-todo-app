//NPM packages
import { render, screen } from '@testing-library/react';
import { RecoilRoot } from "recoil";


//Project files
import ShoppingScreen from './screens/ShoppingScreen';
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


test('should save to localStorage', () => {
  const KEY = 'foo',
    VALUE = 'bar';
  dispatch(action.update(KEY, VALUE));
  expect(localStorage.setItem).toHaveBeenLastCalledWith(KEY, VALUE);
  expect(localStorage.__STORE__[KEY]).toBe(VALUE);
  expect(Object.keys(localStorage.__STORE__).length).toBe(1);
});


