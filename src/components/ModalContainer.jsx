import ReactDom from "react-dom";
import { FaWindowClose } from "react-icons/fa";
import { useRecoilState } from "recoil";
import { modalState } from "../state/listState";
export default function ModalContainer() {
  const [modal, setModal] = useRecoilState(modalState);
  if (modal === null) return null;

  return ReactDom.createPortal(
    <>
      <div onClick={() => setModal(null)} className="modal-background"></div>
      <div className="modal-window ">
        <FaWindowClose className="icon" onClick={() => setModal(null)} />
        {modal}
      </div>
    </>,
    document.getElementById("modal")
  );
}