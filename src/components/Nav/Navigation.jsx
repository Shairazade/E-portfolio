import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className='navigation'>
            <NavLink to='/contact' className="navigation_contact headline">
                <h2>Contactez-moi</h2>
            </NavLink>
            
        </nav>
    );
};

export default Navigation;