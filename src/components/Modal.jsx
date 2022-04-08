//NPM packages
import ReactDom from "react-dom";
import { FaWindowClose } from "react-icons/fa";
import { useRecoilState } from "recoil";

//Project file
import { modalState } from "../state/listState";

export default function Modal() {
  const [modal, setModal] = useRecoilState(modalState);

  //Safeguard
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
