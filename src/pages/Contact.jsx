import React from 'react';
import ContactForm from '../components/ContactForm/ContactForm';


export default function Contact() {
  return (
    <div className='contact-container'>
      <div className='contact-info'>      
        <h1>Restons en contact !</h1>
        <p> Vous avez questions ? Ecrivez-moi, je serais ravie de vous répondre aussi rapidement que possible !</p>  
      </div>    
      <ContactForm/>
    </div>
  )
}
