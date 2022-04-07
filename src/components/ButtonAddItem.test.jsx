import {render, screen, fireEvent} from "@testing-library/react";
import { RecoilRoot } from "recoil";
import ButtonAddItem from "./ButtonAddItem";



test("Modal should open when the button clicked", ()=> {
    const fakeMethod = jest.fn(()=> console.log("Yes I have called"))
render(
    <RecoilRoot>
      <ButtonAddItem onClick={fakeMethod} />
    </RecoilRoot>
);
const buttonElement = screen.queryByTestId("addItem")
fireEvent.click(buttonElement);
expect(fakeMethod).toHaveBeenCalledTimes(0);

});





