import { useState } from "react";
import { useRecoilState } from "recoil";
import { listState } from "../state/listState";
import addNewItem from "../scripts/addNewItem";
import InputField from "./InputField";
import items from "../store/items.json";
import validateName from "../scripts/validateName";
import validatePrice from "../scripts/validatePrice";

export default function ModalForm({ modal, setModal }) {

  //Global state
  const [list, setList] = useRecoilState(listState);

  //Local state
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");


//Method
  function handleSubmit(event) {
    event.preventDefault();
    const newItem = addNewItem(name, price, setModal);
    setList([...list, newItem]);
  }

  // Safeguard

  return (
    <div data-testid="modalForm" className="modalForm">
      <form onSubmit={(event) => handleSubmit(event)}>
        <h2>Add a new item</h2>
        <InputField
          settings={items.name}
          state={[name, setName]}
          validation={validateName}
        />
        <InputField
          settings={items.price}
          state={[price, setPrice]}
          validation={validatePrice}
        />
        <div className="button-wrapper">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
