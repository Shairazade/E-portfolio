import React from "react";

const ModalConfirmation = ({ isOpen, onClose }) => {
  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="modal-container">
        <h2 className="modal-title">Confirmation d'envoi</h2>
        <p className="modal-message">Merci, votre message a bien été envoyé !</p>
        <button className="modal-button" onClick={onClose}>Fermer</button>
      </div>
    </div>
  );
};

export default ModalConfirmation;
