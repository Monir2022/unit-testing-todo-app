//NPM packages
import { useRecoilState } from "recoil";
import { modalState } from "../state/listState";

//Project files
import ModalForm from "./ModalForm";

export default function ButtonAddItem() {

  //Global state
  const [modal, setModal] = useRecoilState(modalState);

  //Methods
  function openModal() {
    setModal(<ModalForm modal={modal} setModal={setModal} />);
  }

  return (
    <div className="button-wrapper">
      <button data-testid="addItem" onClick={openModal}>
        Add Item
      </button>
    </div>
  );
}
