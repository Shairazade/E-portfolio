import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

// npm i @emailjs/browser

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    e.target.reset(e);

    emailjs
      .sendForm(
        "service_w3uxy6p",
        "template_6h83xyv",
        form.current,
        "5KtU-oM_rkf-xUyv0"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message envoyé !");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (

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

  );
};

export default ContactForm;

// Styles
