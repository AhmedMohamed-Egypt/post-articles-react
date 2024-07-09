import ReactDOM from "react-dom";
function Modal({ children }) {
  const ModalBody = () => {
    return <div id="modalBody">
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
