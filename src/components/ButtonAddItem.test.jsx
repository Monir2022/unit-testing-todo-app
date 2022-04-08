//NPM Packages
import {render, screen, fireEvent} from "@testing-library/react";
import { RecoilRoot } from "recoil";

//Project file
import ButtonAddItem from "./ButtonAddItem";



test("Modal should open when the button clicked", ()=> {

//Arrange
    const fakeMethod = jest.fn(()=> console.log("Yes I have called"))
render(
    <RecoilRoot>
      <ButtonAddItem onClick={fakeMethod} />
    </RecoilRoot>
);

//Acts
const buttonElement = screen.queryByTestId("addItem")
fireEvent.click(buttonElement);

//Assert
expect(fakeMethod).toHaveBeenCalledTimes(0);

});





