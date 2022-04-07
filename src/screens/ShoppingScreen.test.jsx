import { render } from "@testing-library/react";
import { RecoilRoot } from "recoil";

import ShoppingScreen from "./ShoppingScreen";


  test("Shopping screen must have a add item button", () => {
    const { getByTestId } = render(
      <RecoilRoot>
        <ShoppingScreen />
      </RecoilRoot>
    );
    const buttonElement = getByTestId("addItem");
    expect(buttonElement).toBeTruthy();
  });
