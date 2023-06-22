import React from 'react';
import Button from '../Button/Button';

export default function Intro() {
  return (
<div className='intro-container'>
    <h1>Shairazade Hassani</h1>
    <p className='line intro-animation'>Développeuse intégratrice web</p>
    <Button to= "/portfolio" text="Voir portfolio"  />
    
</div>
    
  )
}
