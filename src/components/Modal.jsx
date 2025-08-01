import Button from "./Button";

const Modal = ({ isOpen,onClose , rating }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Obrigado!</h2>
        <p>
          Você nos avaliou com {rating} estrela{rating > 1 ? "s" : ""}
        </p>
        <Button className="close-btn" onClick={onClose}>
          Fechar
        </Button>
      </div>
    </div>
  );
};

export default Modal;
