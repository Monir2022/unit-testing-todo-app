import { useEffect } from "react";
import { useRecoilState } from "recoil";
import WelcomeScreen from "./components/WelcomeScreen";
import NormalScreen from "./components/NormalScreen";
import ModalContainer from "./components/ModalContainer";
import { listState } from "./state/listState";

import cart from "./assets/images/cart.png";
import "./css/styles.css";

export default function App() {
  const [list, setList] = useRecoilState(listState);
  
  const STORAGE_KEY = "shoppingList";

  function loadData(storageKey, setList) {
    const data = localStorage.getItem(storageKey);
    const parseddata = JSON.parse(data) ?? [];
    setList(parseddata);
  }

  function saveData(storageKey, list) {
    const stringifyList = JSON.stringify(list);
    localStorage.setItem(storageKey, stringifyList);
  }

  useEffect(() => loadData(STORAGE_KEY, setList), [setList]);
  useEffect(() => saveData(STORAGE_KEY, list), [list]);

  return (
    <div className="App">
      <img src={cart} alt="" />
      <h3> Your Shopping List</h3>
      {list.length === 0 ? (
        <WelcomeScreen  />
      ) : (
        <NormalScreen />
      )}
      <ModalContainer  />
    </div>
  );
}