import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className='footer-container'>
      <div className='social-icons'>
         <a  href ="https://www.linkedin.com/in/shairazade-hassani-a67133277/" target="_blank" rel="noopener noreferrer" className='facol'>
         <FontAwesomeIcon icon={faLinkedin} />
        </a>

        <NavLink to='/contact' className='facol'>
        <FontAwesomeIcon icon={faEnvelope} />
        </NavLink>

        <a href="https://github.com/Shairazade?tab=repositories" target="_blank" rel="noopener noreferrer" className='facol'>
        <FontAwesomeIcon icon={faGithubSquare} />
        </a>

        <a href="https://github.com/Shairazade?tab=repositories" target="_blank" rel="noopener noreferrer" className='facol'>
        <FontAwesomeIcon icon={faGraduationCap} />
        </a>
         
      </div>
    </footer>
  );
}

