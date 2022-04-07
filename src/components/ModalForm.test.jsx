import { render, screen, fireEvent } from "@testing-library/react";
import { RecoilRoot } from "recoil";

import ModalForm from "./ModalForm";
import ShoppingScreen from "../screens/ShoppingScreen";
import addNewItem from "../scripts/addNewItem";

jest.mock("../scripts/addNewItem");

test("Should create new item when submit the form", () => {
  render(
    <RecoilRoot>
      <ModalForm />
      <ShoppingScreen />
    </RecoilRoot>
  );

  addNewItem.mockReturnValue({
    id: 1,
    name: "Table",
    price: 100,
    acquired: false,
  });

  const buttonElement = screen.getByText(/submit/i);
  const name = /table/i;
  const price = /100/i;
  fireEvent.click(buttonElement);

  expect(addNewItem).toHaveBeenCalled();
  expect(screen.getByText(name)).toBeInTheDocument();
  expect(screen.getByText(price)).toBeInTheDocument();
});
