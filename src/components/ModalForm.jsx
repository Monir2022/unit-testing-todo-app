import { useState } from "react";
import { useRecoilState } from "recoil";
import { listState } from "../state/listState";
import addNewItem from "../scripts/addNewItem";
import validateName from "../scripts/validateName";
import validatePrice from "../scripts/validatePrice";

export default function ModalForm({ setModal }) {
  const [list, setList] = useRecoilState(listState);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const newItem = addNewItem(name, price, setModal);
    if (newItem !== null) setList([...list, newItem]);
  }

  return (
    <div data-testid="modalForm" className="modalForm">
      <form onSubmit={(event) => handleSubmit(event)}>
        <h2>Add a new Product</h2>
        <label>Item name:</label>
        <input
          required
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Ex: Table"
          validation={validateName}
        />
        <label>Item price:</label>
        <input
          required
          type="number"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
          placeholder="Ex: 100:-"
          validation={validatePrice}
        />
        <div className="button-wrapper">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
