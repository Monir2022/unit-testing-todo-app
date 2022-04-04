// NPM Packages
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import validateName from "../scripts/validateName";
import validatePrice from "../scripts/validatePrice";

export default function Form({ onSubmit }) {
  // Local state
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // Methods
  function handleSubmit(event) {
    event.preventDefault();
    onSubmit({
      id: uuidv4(),
      name: name,
      price: price,
      isDone: false,
    });

    setName("");
    setPrice("");
  }

  return (
    <div>
      <h3>Add a new shopping item:</h3>
      <input
        type="text"
        placeholder="Ex: chair"
        value={name}
        onChange={(event) => setName(event.target.value)}
        validateName={validateName}
      />
      <input
        type="number"
        placeholder="Ex: 100:-"
        value={price}
        onChange={(event) => setPrice(event.target.value)}
        validatePrice={validatePrice}
      />
      <button className="button-main" type="button" onClick={handleSubmit}>
        Add item
      </button>
    </div>
  );
}
