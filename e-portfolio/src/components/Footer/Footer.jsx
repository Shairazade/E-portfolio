import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className='footer-container'>
      <div className='social-icons'>
        <a href="https://github.com/Shairazade?tab=repositories" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithubSquare} />
        </a>
         
      </div>
    </footer>
  );
}

