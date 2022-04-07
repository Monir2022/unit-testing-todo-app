import {render} from "@testing-library/react";
import { RecoilRoot } from "recoil";

import WelcomeScreen from "./WelcomeScreen";

test("There is a button on welcome screen for adding item", ()=>{
    const {getByTestId} = render(
        <RecoilRoot>
        <WelcomeScreen />
      </RecoilRoot>
    );

    const buttonElement = getByTestId("addItem")
    expect(buttonElement).toBeTruthy();
});

