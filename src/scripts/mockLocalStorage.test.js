import React from "react";
import { mockLocalStorage } from "./mockLocalStorage";


const { getItemMock, setItemMock } = mockLocalStorage();

test("Getting something from localStorage", () => {
  getItemMock.mockReturnValue("chair");
  expect(getItemMock).toHaveBeenCalled();
  expect(getByText(/chair/i)).toBeInTheDocument();
});

test("Setting somthing to localStorage", () => {
  const value = "value";
  const key = "key";
  expect(setItemMock).toHaveBeenCalledWith(key, value);
});
