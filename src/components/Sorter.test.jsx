import { render, fireEvent } from "@testing-library/react";
import { RecoilRoot } from "recoil";

import Sorter from "./Sorter";
import { sortByName, sortByPrice } from "../scripts/sortList";

jest.mock("../scripts/sortList");


  test("Should call the sortByName function if I press on sortby name button", () => {
    
    const { getByTestId } = render(
      <RecoilRoot>
        <Sorter />
      </RecoilRoot>
    );
    const button = getByTestId("byName");
    fireEvent.click(button);
    expect(sortByName).toHaveBeenCalledTimes(1);
  });


  test('Should call sortByPrice function if I press on sortby price function',()=>{
    const { getByTestId } = render(
        <RecoilRoot>
          <Sorter />
        </RecoilRoot>
      );
      const button = getByTestId("byPrice");
      fireEvent.click(button);
      expect(sortByPrice).toHaveBeenCalledTimes(1);
  })