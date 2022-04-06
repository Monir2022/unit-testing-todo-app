import ModalForm from "./ModalForm";
import { useRecoilState } from "recoil";
import { modalState } from "../state/listState";

export default function ButtonAddItem() {
  const [modal, setModal] = useRecoilState(modalState);

  function openModal() {
    setModal(<ModalForm setModal={setModal} />);
  }
  return (
    <div className="button-wrapper">
      <button data-testid="addItem" onClick={openModal}>
        Add Item
      </button>
    </div>
  );
}