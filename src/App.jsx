import { useEffect } from "react";
import { useRecoilState } from "recoil";
import Logo from "./assets/images/logo.jpg";
import WelcomeScreen from "./screens/WelcomeScreen";
import ShoppingScreen from "./screens/ShoppingScreen";
import Modal from "./components/Modal";
import { listState } from "./state/listState";

import "./styles/styles.css";


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
      <div className="nav">
        <img src={Logo} alt="a logotype in blue and yellow that says eika" />
      </div>
      {list.length === 0 ? <WelcomeScreen /> : <ShoppingScreen />}
      <Modal />
    </div>
  );
}
