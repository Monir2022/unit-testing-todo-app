//NPM Packages
import {render} from "@testing-library/react";
import { RecoilRoot } from "recoil";

//Project file
import WelcomeScreen from "./WelcomeScreen";

test("There is a button on welcome screen for adding item", ()=>{
//Arrange
    const {getByTestId} = render(
        <RecoilRoot>
        <WelcomeScreen />
      </RecoilRoot>
    );

  //Acts
    const buttonElement = getByTestId("addItem")

  //Assert
    expect(buttonElement).toBeTruthy();
});

