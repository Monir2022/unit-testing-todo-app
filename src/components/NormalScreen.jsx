import { useState } from "react";
import { useRecoilState } from "recoil";
import { listState } from "../state/listState";
import ShoppingList from "./ShoppingList";
import ButtonAddItem from "./ButtonAddItem";
import Sorter from "./Sorter";
export default function NormalScreen({ setModal }) {
  const [list, setList] = useRecoilState(listState);
  const [showAcquired, setShowAcquired] = useState(false);
  const acquiredList = list.filter((item) => item.acquired === true);
  const pendingList = list.filter((item) => item.acquired === false);

  function editList(editedItem) {
    const index = list.findIndex((item) => item.id === editedItem.id);
    const clonedList = [...list];
    clonedList[index] = editedItem;
    setList(clonedList);
  }
  return (
    <div data-testid="normalScreen" className="normal-screen">
      <Sorter />
      <ShoppingList list={pendingList} editList={editList} />
      <ButtonAddItem />
      <button
        className="secondary-button"
        onClick={() => setShowAcquired(!showAcquired)}
      >
        Show acquired items
      </button>
      {showAcquired && <ShoppingList list={acquiredList} editList={editList} />}
    </div>
  );
}