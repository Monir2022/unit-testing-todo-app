//NPM packages
import { render } from "@testing-library/react";
import { RecoilRoot } from "recoil";
//Project file
import ShoppingScreen from "./ShoppingScreen";


  test("Shopping screen must have a add item button", () => {
  //Arrange
    const { getByTestId } = render(
      <RecoilRoot>
        <ShoppingScreen />
      </RecoilRoot>
    );

    //Acts
    const buttonElement = getByTestId("addItem");

    //Assert
    expect(buttonElement).toBeTruthy();
  });
