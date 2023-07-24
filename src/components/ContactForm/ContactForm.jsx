import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ModalConfirmation from "../ModalConfirmation/ModalConfirmation";

// npm i @emailjs/browser

const ContactForm = () => {
  const form = useRef();
  const [showConfirmation, setShowConfirmation] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm( "service_w3uxy6p", "template_6h83xyv", form.current, "5KtU-oM_rkf-xUyv0")
      .then(
        (result) => {
          console.log(result.text);
          console.log("message envoyé !");
          setShowConfirmation(true); // Afficher la fenêtre de confirmation
          form.current.reset(); // Réinitialiser le formulaire après envoi
        },
        (error) => {
          console.log(error.text);
        }
      );
      
  };

  const handleCloseConfirmation = () => {
    setShowConfirmation(false); // Fermer la fenêtre de confirmation
  };
  
  return (
    <div>
      <form ref={form} onSubmit={sendEmail}>
        <label>Nom</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Sujet</label>
        <input type="text" name="user_subject" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Envoyer" />
      </form>

      {showConfirmation && (
        <ModalConfirmation onClose={handleCloseConfirmation} />
      )}
    </div>

  );
};

export default ContactForm;