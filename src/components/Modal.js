import ReactDOM from "react-dom";
function Modal({onClick, children }) {
  const ModalBody = () => {
    return <div id="modalBody" onClick={onClick}>
        {children}
    </div>
  };
  const modalDom = ReactDOM.createPortal(
    <ModalBody />,
    document.getElementById("modal")
  );
  return <>{modalDom}</>;
}

export default Modal;
