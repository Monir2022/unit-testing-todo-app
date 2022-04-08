//NPM packages
import { render, fireEvent } from "@testing-library/react";
import { RecoilRoot } from "recoil";

//Project files
import Sorter from "./Sorter";
import { sortByName, sortByPrice } from "../scripts/sortList";

jest.mock("../scripts/sortList");


  test("Should call the sortByName function if I press on sortby name button", () => {
//Arrange 
    const { getByTestId } = render(
      <RecoilRoot>
        <Sorter />
      </RecoilRoot>
    );

  //Acts
    const button = getByTestId("byName");
    fireEvent.click(button);

  //Assert
    expect(sortByName).toHaveBeenCalledTimes(1);
  });


  test('Should call sortByPrice function if I press on sortby price function',()=>{
 //Arrange  
    const { getByTestId } = render(
        <RecoilRoot>
          <Sorter />
        </RecoilRoot>
      );

 //Acts
      const button = getByTestId("byPrice");
      fireEvent.click(button);
 //Assert

      expect(sortByPrice).toHaveBeenCalledTimes(1);
  })