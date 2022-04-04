// NPM Packages
import { useEffect, useState } from "react";
// Project files
import Logo from "./assets/images/logo.jpg";
import WelcomeScreen from "./screens/WelcomeScreen";
import ShoppingScreen from "./screens/ShoppingScreen";
import "./styles/style.css";

export default function App() {
  // Local State
  const [items, setItems] = useState([]);

  const storageKey = "STORAGE_KEY";

  // Methods
  useEffect(() => loadData(storageKey, setItems), []);
  useEffect(() => saveData(storageKey, items), [items]);

  function loadData(storageKey, setItems) {
    const data = localStorage.getItem(storageKey);
    const updatedData = JSON.parse(data) ?? [];
    setItems(updatedData);
  }

  function saveData(storageKey, items) {
    const stringifyItems = JSON.stringify(items);
    localStorage.setItem(storageKey, stringifyItems);
  }

  return (
    <div className="App">
      <div className="nav">
        <img src={Logo} alt="a logotype in blue and yellow that says eika" />
      </div>
      {items.length === 0 && (
        <WelcomeScreen items={items} setItems={setItems} />
      )}
      {items.length > 0 && <ShoppingScreen items={items} setItems={setItems} />}
    </div>
  );
}
