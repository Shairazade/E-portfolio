import React from 'react';
import ContactForm from '../components/ContactForm/ContactForm';


export default function Contact() {
  return (
    <div className='contact-container'>
    <h1>Restons en contact !</h1>
    <p> Des questions ? Ecrivez-moi, je serais ravie de vous répondre aussi rapidement que possible !</p>
    <ContactForm/>
    </div>
  )
}
