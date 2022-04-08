//NPM packages
import { render, screen } from "@testing-library/react";
//Project files
import InputField from "./InputField";

test("Should accepts settings and state props", () => {
  // arrange
  const settings = {
    label: "Input price",
    placeholder: "Ex: 100",
   
  };
  const state = ["Table", () => {}];

  render(<InputField settings={settings} state={state} />);
  //Act
  const labelElement = screen.getByText(/input price/i);

  //Assert
  expect(labelElement).toBeInTheDocument();
});